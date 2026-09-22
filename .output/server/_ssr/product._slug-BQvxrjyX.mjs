import { f as productBySlug, l as formatPrice, p as products } from "./products-DsQuuDPr.mjs";
import { a as createWhatsAppOrderLink } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useCart } from "./use-cart-BBPq7afQ.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ShoppingBag, p as ChevronLeft, u as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useWishlist } from "./use-wishlist-D3GjM_RI.mjs";
import { t as Route } from "./product._slug-BtFnGVCL.mjs";
import { t as CapsuleReveal } from "./CapsuleReveal-BKPlUNN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BQvxrjyX.js
var import_jsx_runtime = require_jsx_runtime();
function ProductComponent() {
	const { slug } = Route.useParams();
	const product = productBySlug(slug);
	const { has, toggle } = useWishlist();
	const navigate = useNavigate();
	const { add } = useCart();
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display-lg text-espresso",
			children: "Piece not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "mt-6 inline-block hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
			children: "Back to shop"
		})]
	});
	const wished = has(product.slug);
	const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);
	const img = product.images[0] ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pt-8 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => navigate({ to: "/shop" }),
				className: "flex items-center gap-2 font-sans text-[0.6rem] uppercase tracking-[0.25em] text-ivory/55 hover:text-ivory",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: "h-4 w-4",
					strokeWidth: 1.3
				}), " Back to shop"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-12 px-5 py-10 md:grid-cols-2 md:px-10 md:py-16 md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleReveal, {
				image: img,
				alt: product.alt,
				eyebrow: "Inside the capsule",
				name: product.name,
				meaning: product.description,
				price: formatPrice(product.price),
				href: createWhatsAppOrderLink(product),
				showInfo: false
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-lg mt-4 text-espresso",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-xl font-light text-gold",
						children: formatPrice(product.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 body-lg text-stone",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-2",
						children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 font-sans text-[0.78rem] font-light text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold" }),
								" ",
								d
							]
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									add(product.slug);
									toast.success("Added to your bag", { description: product.name });
								},
								className: "glass-button flex flex-1 items-center justify-center gap-2 btn-gold py-4 text-center font-sans text-[0.65rem] uppercase tracking-[0.3em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
									className: "h-4 w-4",
									strokeWidth: 1.4
								}), " Add to bag"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: createWhatsAppOrderLink(product),
								target: "_blank",
								rel: "noreferrer",
								className: "flex-1 btn-gold py-4 text-center font-sans text-[0.65rem] uppercase tracking-[0.3em]",
								children: "Order Now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									toggle(product.slug);
									toast(wished ? "Removed from your wishlist" : "Saved to your wishlist", { description: product.name });
								},
								"aria-pressed": wished,
								className: `border border-espresso/20 px-5 transition-colors hover:bg-cream ${wished ? "heart-pop" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: `h-5 w-5 ${wished ? "fill-gold text-gold" : "text-espresso"}`,
									strokeWidth: 1.2
								})
							})
						]
					}),
					product.customisable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 script text-xl text-gold",
						children: "Made to order — just for you."
					})
				]
			})]
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-cream px-5 py-20 md:px-10 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "You may also love"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-md mt-4 text-espresso",
					children: "MORE TO WEAR."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 grid max-w-[1400px] grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8",
				children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: p.slug },
					className: "group block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden bg-obsidian",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0] ?? "",
								alt: p.alt,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base text-espresso",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm font-light text-gold",
							children: formatPrice(p.price)
						})
					]
				}, p.slug))
			})]
		})
	] });
}
//#endregion
export { ProductComponent as component };
