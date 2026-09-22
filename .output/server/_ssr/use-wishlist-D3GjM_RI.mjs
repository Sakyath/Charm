import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-wishlist-D3GjM_RI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "charmelle:wishlist";
function read() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function useWishlist() {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setItems(read());
		const onStorage = (e) => {
			if (e.key === KEY) setItems(read());
		};
		const onSync = () => setItems(read());
		window.addEventListener("storage", onStorage);
		window.addEventListener("charmelle:wishlist-sync", onSync);
		return () => {
			window.removeEventListener("storage", onStorage);
			window.removeEventListener("charmelle:wishlist-sync", onSync);
		};
	}, []);
	const persist = (0, import_react.useCallback)((next) => {
		setItems(next);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(KEY, JSON.stringify(next));
			window.dispatchEvent(new Event("charmelle:wishlist-sync"));
		}
	}, []);
	return {
		items,
		toggle: (0, import_react.useCallback)((slug) => {
			const cur = read();
			persist(cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]);
		}, [persist]),
		has: (0, import_react.useCallback)((slug) => items.includes(slug), [items]),
		count: items.length
	};
}
//#endregion
export { useWishlist as t };
