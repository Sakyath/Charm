import { l as formatPrice, p as products } from "./products-DsQuuDPr.mjs";
import { i as createWhatsAppInquiryLink } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Heart } from "../_libs/lucide-react.mjs";
import { t as useWishlist } from "./use-wishlist-D3GjM_RI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-3k3rxZyz.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistComponent() {
	const { items, toggle } = useWishlist();
	const saved = products.filter((p) => items.includes(p.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-obsidian px-5 py-16 md:px-10 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-gold",
				children: "Saved"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-lg mt-6 text-espresso",
				children: "YOUR WISHLIST."
			})]
		}), saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-16 max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "mx-auto h-10 w-10 text-stone/40",
					strokeWidth: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-sans text-sm font-light text-stone",
					children: "No saved pieces yet. Tap the heart on any piece to keep it here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-8 inline-block hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
					children: "Browse the collection"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 grid max-w-[1400px] grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4",
			children: saved.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden bg-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: p.slug },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0] ?? "",
								alt: p.alt,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toggle(p.slug),
							"aria-label": `Remove ${p.name}`,
							className: "absolute right-3 top-3 rounded-full bg-obsidian/80 p-2 backdrop-blur-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "h-4 w-4 fill-gold text-gold",
								strokeWidth: 1.2
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-lg text-espresso",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-sm font-light text-gold",
						children: formatPrice(p.price)
					})
				]
			}, p.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: createWhatsAppInquiryLink("I'd like to order a few pieces from my wishlist."),
				target: "_blank",
				rel: "noreferrer",
				className: "inline-block btn-gold px-9 py-4 font-sans text-[0.65rem] uppercase tracking-[0.3em]",
				children: "Enquire on WhatsApp"
			})
		})] })]
	});
}
//#endregion
export { WishlistComponent as component };
