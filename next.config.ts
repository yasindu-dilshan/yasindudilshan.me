import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only serves `q` values listed here. 95 keeps the avatar crisp
    // at small render sizes, where the default 75 visibly softens the face.
    qualities: [75, 95],
  },
};

export default nextConfig;
