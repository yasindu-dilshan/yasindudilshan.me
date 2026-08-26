import avatar from "../../public/images/site/avatar.png";

/**
 * Statically imported so the emitted URL carries a content hash.
 * Next serves optimized images as `immutable`, so replacing the photo under
 * the same path would otherwise leave stale bytes pinned in browser caches.
 */
export const avatarImage = avatar;
