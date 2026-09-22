const KEY = "charmelle:wishlist";
const EVENT = "charmelle:wishlist-change";

export const readWishlist = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
};

const write = (slugs: string[]) => {
  window.localStorage.setItem(KEY, JSON.stringify(slugs));
  window.dispatchEvent(new CustomEvent(EVENT));
};

export const toggleWishlist = (slug: string) => {
  const current = readWishlist();
  const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
  write(next);
  return next;
};

export const subscribeWishlist = (cb: () => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};

export const WISHLIST_EVENT = EVENT;
