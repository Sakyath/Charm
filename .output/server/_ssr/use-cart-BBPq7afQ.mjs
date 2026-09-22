import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-cart-BBPq7afQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "charmelle:cart";
function read() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function write(items) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, JSON.stringify(items));
	window.dispatchEvent(new Event("charmelle:cart-sync"));
}
function useCart() {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setItems(read());
		const onStorage = (event) => {
			if (event.key === KEY) setItems(read());
		};
		const onSync = () => setItems(read());
		window.addEventListener("storage", onStorage);
		window.addEventListener("charmelle:cart-sync", onSync);
		return () => {
			window.removeEventListener("storage", onStorage);
			window.removeEventListener("charmelle:cart-sync", onSync);
		};
	}, []);
	return {
		items,
		add: (0, import_react.useCallback)((slug) => {
			const current = read();
			const next = current.find((item) => item.slug === slug) ? current.map((item) => item.slug === slug ? {
				...item,
				quantity: item.quantity + 1
			} : item) : [...current, {
				slug,
				quantity: 1
			}];
			setItems(next);
			write(next);
		}, []),
		updateQuantity: (0, import_react.useCallback)((slug, quantity) => {
			const next = read().map((item) => item.slug === slug ? {
				...item,
				quantity
			} : item).filter((item) => item.quantity > 0);
			setItems(next);
			write(next);
		}, []),
		remove: (0, import_react.useCallback)((slug) => {
			const next = read().filter((item) => item.slug !== slug);
			setItems(next);
			write(next);
		}, []),
		count: items.reduce((total, item) => total + item.quantity, 0)
	};
}
//#endregion
export { useCart as t };
