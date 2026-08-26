import fs from "fs";
import path from "path";

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * Reads the intrinsic pixel dimensions out of a PNG or JPEG header.
 *
 * Card thumbnails need real width/height so each one can render at its own
 * aspect ratio. Fitting a mixed bag of diagrams into one fixed ratio would
 * either crop them or letterbox them, and letterboxing is plainly visible in
 * dark mode where the matte no longer matches a diagram's light background.
 *
 * Only the header is parsed, so this stays cheap enough to run per post during
 * the static build.
 */
export function getImageSize(publicPath: string): ImageSize | null {
  const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  if (!fs.existsSync(filePath)) return null;

  const buf = fs.readFileSync(filePath);

  // PNG: 8-byte signature, then the IHDR chunk carries width/height.
  if (buf.length >= 24 && buf.toString("hex", 0, 8) === "89504e470d0a1a0a") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk the marker segments to the first Start-Of-Frame.
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      // SOF0..SOF15, excluding DHT (C4), JPG (C8) and DAC (CC).
      const isStartOfFrame =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isStartOfFrame) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      const segmentLength = buf.readUInt16BE(i + 2);
      if (segmentLength < 2) return null;
      i += 2 + segmentLength;
    }
  }

  return null;
}
