import { n as __toESM } from "../_runtime.mjs";
import { l as formatPrice, n as CATEGORIES, p as products } from "./products-DsQuuDPr.mjs";
import { a as createWhatsAppOrderLink } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useCart } from "./use-cart-BBPq7afQ.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MessageCircle, d as Eye, i as ShoppingBag, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useWishlist } from "./use-wishlist-D3GjM_RI.mjs";
import { t as Route } from "./shop-B8rn8fNc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-SzhcnusU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, onQuickView }) {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const { has, toggle } = useWishlist();
	const { add } = useCart();
	const wished = has(product.slug);
	const img = product.images[0] ?? "";
	const moveSpotlight = (event) => {
		const bounds = event.currentTarget.getBoundingClientRect();
		event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
		event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group spotlight glass-card p-3",
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		onPointerMove: moveSpotlight,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[1.1rem] bg-cream",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "product-zoom h-full w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: product.alt,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						toggle(product.slug);
						toast(wished ? "Removed from your wishlist" : "Saved to your wishlist", { description: product.name });
					},
					"aria-pressed": wished,
					"aria-label": wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`,
					className: `glass-control absolute right-3 top-3 rounded-full p-2 backdrop-blur-sm transition-all ${wished ? "heart-pop" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: `h-4 w-4 transition-all ${wished ? "fill-gold text-gold" : "text-ivory/80"}`,
						strokeWidth: 1.2
					})
				}),
				onQuickView && hovered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onQuickView(product),
					className: "btn-gold absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 font-sans text-[0.6rem] uppercase tracking-[0.25em]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "mr-1.5 inline h-3 w-3",
						strokeWidth: 1.4
					}), "Quick View"]
				}),
				product.customisable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded-full bg-gold/90 px-3 py-1 font-sans text-[0.55rem] uppercase tracking-[0.2em] text-obsidian",
					children: "Made to order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						add(product.slug);
						toast.success("Added to your bag", { description: product.name });
					},
					className: "glass-control absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-ivory/80 transition hover:scale-110",
					"aria-label": `Add ${product.name} to bag`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
						className: "h-4 w-4",
						strokeWidth: 1.4
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 px-1 pb-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg text-ivory transition-colors group-hover:text-gold",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 line-clamp-2 font-sans text-[0.78rem] font-light leading-snug text-ivory/50",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-sm font-light text-gold",
						children: formatPrice(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: createWhatsAppOrderLink(product),
						target: "_blank",
						rel: "noreferrer",
						onPointerMove: moveSpotlight,
						className: "spotlight spotlight-action glass-button flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-ivory/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "h-3.5 w-3.5",
							strokeWidth: 1.4
						}), "Order via WhatsApp"]
					})]
				})
			]
		})]
	});
}
function QuickView({ product, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!product) return;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [product, onClose]);
	if (!product) return null;
	const img = product.images[0] ?? "";
	const { add } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-hidden bg-obsidian md:grid-cols-2",
			onClick: (e) => e.stopPropagation(),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": `${product.name} quick view`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close quick view",
					className: "absolute right-3 top-3 z-10 rounded-full bg-obsidian/80 p-2 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "h-4 w-4 text-espresso",
						strokeWidth: 1.2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-zoom aspect-square overflow-hidden bg-cream md:aspect-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: product.alt,
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-espresso md:text-3xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-lg font-light text-gold",
							children: formatPrice(product.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-sans text-sm font-light leading-relaxed text-stone",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										add(product.slug);
										toast.success("Added to your bag", { description: product.name });
									},
									className: "glass-button flex items-center justify-center gap-2 btn-gold py-3.5 font-sans text-[0.65rem] uppercase tracking-[0.3em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
										className: "h-4 w-4",
										strokeWidth: 1.4
									}), " Add to bag"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: createWhatsAppOrderLink(product),
									target: "_blank",
									rel: "noreferrer",
									className: "btn-gold py-3.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.3em]",
									children: "Order Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: product.slug },
									onClick: onClose,
									className: "border border-espresso/20 py-3.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.3em] text-espresso transition-colors hover:bg-ivory/5",
									children: "View Details"
								})
							]
						})
					]
				})
			]
		})
	});
}
function ProductGrid({ query }) {
	const [category, setCategory] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [quickView, setQuickView] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => {
		let result = [...products];
		if (query) {
			const q = query.toLowerCase();
			result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
		}
		if (category !== "All") result = result.filter((p) => p.category === category);
		switch (sort) {
			case "low-high":
				result.sort((a, b) => a.price - b.price);
				break;
			case "high-low":
				result.sort((a, b) => b.price - a.price);
				break;
			case "newest":
				result.sort((a, b) => (b.collections.includes("new") ? 1 : 0) - (a.collections.includes("new") ? 1 : 0));
				break;
			default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
		}
		return result;
	}, [
		category,
		sort,
		query
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-x-6 gap-y-2",
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(cat),
					className: `font-sans text-[0.62rem] uppercase tracking-[0.25em] transition-colors ${category === cat ? "text-espresso" : "text-stone hover:text-gold"}`,
					children: cat
				}, cat))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: sort,
				onChange: (e) => setSort(e.target.value),
				className: "border border-espresso/15 bg-transparent px-3 py-2 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-espresso focus:outline-none",
				"aria-label": "Sort products",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "featured",
						children: "Featured"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "low-high",
						children: "Price: Low to High"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "high-low",
						children: "Price: High to Low"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "newest",
						children: "Newest"
					})
				]
			})]
		}),
		filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-20 text-center font-sans text-sm font-light text-stone",
			children: "No pieces found. Try a different search."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4",
			children: filtered.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product,
				onQuickView: setQuickView
			}, product.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickView, {
			product: quickView,
			onClose: () => setQuickView(null)
		})
	] });
}
function ShopComponent() {
	const q = Route.useSearch().q ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 py-16 md:px-10 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "The collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg mt-6 text-espresso",
					children: "ALL PIECES."
				}),
				q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "body-lg mt-4 text-stone",
					children: [
						"Results for “",
						q,
						"”."
					]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 max-w-[1500px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { query: q })
		})]
	});
}
//#endregion
export { ShopComponent as component };
