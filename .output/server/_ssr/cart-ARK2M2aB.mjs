import { f as productBySlug, l as formatPrice } from "./products-DsQuuDPr.mjs";
import { n as createWhatsAppCartOrderLink } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useCart } from "./use-cart-BBPq7afQ.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ShoppingBag, n as Trash2, o as Plus, s as Minus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-ARK2M2aB.js
var import_jsx_runtime = require_jsx_runtime();
function CartComponent() {
	const { items, updateQuantity, remove } = useCart();
	const cartItems = items.map((item) => ({
		...item,
		product: productBySlug(item.slug)
	})).filter((item) => Boolean(item.product));
	const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
	const whatsappItems = cartItems.map(({ product, quantity }) => ({
		product,
		quantity
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-obsidian px-5 py-16 md:px-10 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-gold",
				children: "Your selection"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-lg mt-6 text-espresso",
				children: "YOUR BAG."
			})]
		}), cartItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-16 max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
					className: "mx-auto h-10 w-10 text-stone/40",
					strokeWidth: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-sans text-sm font-light text-stone",
					children: "Your bag is waiting for something beautiful."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-8 inline-block hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
					children: "Browse the collection"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-14 grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_360px] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-espresso/10 border-y border-espresso/10",
				children: cartItems.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex gap-4 py-5 md:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "w-24 shrink-0 overflow-hidden bg-cream md:w-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[0] ?? "",
							alt: product.alt,
							className: "aspect-[4/5] w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col justify-between gap-4 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-espresso",
								children: product.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm font-light text-gold",
							children: formatPrice(product.price)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-5 md:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border border-espresso/15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => updateQuantity(product.slug, quantity - 1),
										"aria-label": `Decrease ${product.name} quantity`,
										className: "p-2 text-espresso transition-colors hover:bg-ivory/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
											className: "h-3.5 w-3.5",
											strokeWidth: 1.3
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-8 text-center font-sans text-sm text-espresso",
										children: quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => updateQuantity(product.slug, quantity + 1),
										"aria-label": `Increase ${product.name} quantity`,
										className: "p-2 text-espresso transition-colors hover:bg-ivory/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
											className: "h-3.5 w-3.5",
											strokeWidth: 1.3
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => remove(product.slug),
								"aria-label": `Remove ${product.name} from bag`,
								className: "p-2 text-stone transition-colors hover:text-espresso",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
									className: "h-4 w-4",
									strokeWidth: 1.3
								})
							})]
						})]
					})]
				}, product.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border border-espresso/10 bg-cream p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between font-sans text-sm text-stone",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-espresso",
							children: formatPrice(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-xs font-light leading-relaxed text-stone",
						children: "Shipping and final details will be confirmed with you on WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: createWhatsAppCartOrderLink(whatsappItems),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-7 flex items-center justify-center gap-2 btn-gold px-5 py-4 text-center font-sans text-[0.62rem] uppercase tracking-[0.25em]",
						children: "Place order on WhatsApp"
					})
				]
			})]
		})]
	});
}
//#endregion
export { CartComponent as component };
