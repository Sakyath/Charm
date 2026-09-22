import { n as __toESM } from "../_runtime.mjs";
import { a as INSTAGRAM_URL, i as INSTAGRAM_HANDLE, o as WHATSAPP_DISPLAY } from "./products-DsQuuDPr.mjs";
import { t as GENERAL_WHATSAPP_LINK } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as useCart } from "./use-cart-BBPq7afQ.mjs";
import { _ as require_react_dom, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as MessageCircle, f as ChevronRight, i as ShoppingBag, l as Menu, r as Sparkles, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { t as Route$7 } from "./collections-eceWdQm4.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as useWishlist } from "./use-wishlist-D3GjM_RI.mjs";
import { t as Route$8 } from "./product._slug-BtFnGVCL.mjs";
import { t as Route$9 } from "./shop-B8rn8fNc.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DkrYPt00.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var styles_default = "/assets/styles-B9LeAxYJ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var links = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/collections",
		label: "Collections"
	},
	{
		to: "/customise",
		label: "Customise"
	},
	{
		to: "/our-story",
		label: "Our Story"
	},
	{
		to: "/journal",
		label: "Journal"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [utilityOpen, setUtilityOpen] = (0, import_react.useState)(false);
	const [utilityClosing, setUtilityClosing] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const { count } = useWishlist();
	const { count: cartCount } = useCart();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const utilityDragStart = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => setMounted(true), []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 18);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open || search || utilityOpen || utilityClosing ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [
		open,
		search,
		utilityOpen,
		utilityClosing
	]);
	(0, import_react.useEffect)(() => {
		if (!utilityClosing) return;
		const timeout = window.setTimeout(() => setUtilityClosing(false), 500);
		return () => window.clearTimeout(timeout);
	}, [utilityClosing]);
	(0, import_react.useEffect)(() => {
		if (!utilityOpen) return;
		window.history.pushState({ charmelleUtility: true }, "", window.location.href);
		const onPopState = () => closeUtility(false);
		const onKeyDown = (event) => {
			if (event.key === "Escape") closeUtility();
		};
		window.addEventListener("popstate", onPopState);
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("popstate", onPopState);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [utilityOpen]);
	const openUtility = () => {
		setUtilityClosing(false);
		setUtilityOpen(true);
	};
	const closeUtility = (goBack = true) => {
		setUtilityOpen(false);
		setUtilityClosing(true);
		if (goBack && window.history.state?.charmelleUtility) window.history.back();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `navbar-contrast nav-pill pointer-events-auto relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4 ${scrolled ? "is-glass" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "md:hidden",
						onClick: () => setOpen(true),
						"aria-label": "Open menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "h-5 w-5 text-inherit",
							strokeWidth: 1.3
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 md:flex",
						children: links.slice(0, 3).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hairline-link font-sans text-[0.62rem] uppercase tracking-[0.25em] text-inherit",
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "absolute left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tracking-[0.18em] text-inherit md:text-3xl",
							children: "Charmelle"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 md:flex",
							children: links.slice(3).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "hairline-link font-sans text-[0.62rem] uppercase tracking-[0.25em] text-inherit",
								children: l.label
							}, l.to))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => utilityOpen ? closeUtility() : openUtility(),
								"aria-expanded": utilityOpen,
								"aria-haspopup": "menu",
								"aria-label": "Open shopping tools",
								className: `utility-capsule flex items-center gap-1 rounded-full px-2 py-1.5 text-inherit transition-all duration-300 ${utilityOpen ? "utility-capsule-active" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "utility-capsule-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "h-3.5 w-3.5",
											strokeWidth: 1.5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "utility-capsule-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
											className: "h-3.5 w-3.5",
											strokeWidth: 1.5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "utility-capsule-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
											className: "h-3.5 w-3.5",
											strokeWidth: 1.5
										})
									}),
									(count > 0 || cartCount > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 h-1.5 w-1.5 rounded-full bg-gold" })
								]
							}), mounted && (utilityOpen || utilityClosing) && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close shopping tools",
								className: `utility-scrim fixed inset-0 z-40 h-full w-full cursor-default ${utilityClosing ? "utility-scrim-closing" : ""}`,
								onClick: () => closeUtility()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `utility-popover absolute right-0 top-[calc(100%+0.8rem)] z-50 w-64 overflow-hidden rounded-[1.35rem] p-2 ${utilityClosing ? "utility-popover-closing" : ""}`,
								role: "menu",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "utility-popover-head flex items-center justify-between px-3 pb-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg leading-none text-espresso",
											children: "Little rituals"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-stone",
											children: "Your essentials"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "utility-sparkle",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
												className: "h-3.5 w-3.5",
												strokeWidth: 1.4
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "menuitem",
										style: { "--i": 0 },
										className: "utility-action flex w-full items-center gap-3 rounded-[1rem] px-4 py-3 text-left text-espresso",
										onClick: () => {
											closeUtility();
											setSearch(true);
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
												className: "h-4 w-4 text-gold",
												strokeWidth: 1.4
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 font-sans text-sm",
												children: "Search the collection"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: "h-4 w-4 text-stone/60",
												strokeWidth: 1.4
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/wishlist",
										role: "menuitem",
										style: { "--i": 1 },
										onClick: () => closeUtility(),
										className: "utility-action flex items-center gap-3 rounded-[1rem] px-4 py-3 text-espresso",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
												className: "h-4 w-4 text-gold",
												strokeWidth: 1.4
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 font-sans text-sm",
												children: "Wishlist"
											}),
											count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-sans text-xs text-stone",
												children: count
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: "h-4 w-4 text-stone/60",
												strokeWidth: 1.4
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/cart",
										role: "menuitem",
										style: { "--i": 2 },
										onClick: () => closeUtility(),
										className: "utility-action flex items-center gap-3 rounded-[1rem] px-4 py-3 text-espresso",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
												className: "h-4 w-4 text-gold",
												strokeWidth: 1.4
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1 font-sans text-sm",
												children: "Your bag"
											}),
											cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-sans text-xs text-stone",
												children: cartCount
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: "h-4 w-4 text-stone/60",
												strokeWidth: 1.4
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "utility-drag-handle",
										onPointerDown: (event) => {
											utilityDragStart.current = event.clientY;
											event.currentTarget.setPointerCapture(event.pointerId);
										},
										onPointerMove: (event) => {
											if (utilityDragStart.current !== null && utilityDragStart.current - event.clientY > 56) {
												closeUtility();
												utilityDragStart.current = null;
											}
										},
										onPointerUp: () => {
											utilityDragStart.current = null;
										},
										role: "presentation",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
									})
								]
							})] }), document.body)]
						})]
					})
				]
			}),
			mounted && search && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] bg-obsidian/80 backdrop-blur-sm",
				role: "dialog",
				"aria-modal": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl px-5 pt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Search"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSearch(false),
							"aria-label": "Close search",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "h-5 w-5 text-espresso",
								strokeWidth: 1.3
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							if (q.trim()) window.location.href = `/shop?q=${encodeURIComponent(q.trim())}`;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search for charms, bracelets…",
							className: "mt-6 w-full border-b border-espresso/20 bg-transparent py-3 font-display text-2xl text-espresso placeholder:text-stone/50 focus:outline-none"
						})
					})]
				})
			}), document.body),
			mounted && open && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[60] md:hidden",
				role: "dialog",
				"aria-modal": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ios-scrim absolute inset-0 bg-ink/30 backdrop-blur-[2px]",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ios-sheet absolute inset-x-2 bottom-2 top-14 overflow-hidden rounded-[2.2rem] border border-ivory/15 bg-obsidian/80 p-4 shadow-[0_24px_70px_-20px_rgba(16,11,6,0.45)] backdrop-blur-2xl backdrop-saturate-150",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-[5px] w-10 rounded-full bg-obsidian/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-[0.12em] text-espresso",
								children: "Charmelle"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setOpen(false),
								"aria-label": "Close menu",
								className: "ios-glass-control flex h-9 w-9 items-center justify-center rounded-full text-espresso transition active:scale-90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "h-4 w-4",
									strokeWidth: 1.6
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ios-glass-control mt-6 overflow-hidden rounded-[1.4rem]",
							children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								onClick: () => setOpen(false),
								style: { animationDelay: `${60 + i * 45}ms` },
								className: `ios-row flex items-center justify-between px-5 py-4 font-sans text-[0.95rem] tracking-[0.01em] text-espresso transition active:bg-espresso/5 ${i > 0 ? "border-t border-espresso/10" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "h-4 w-4 text-stone/70",
									strokeWidth: 1.6
								})]
							}, l.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: GENERAL_WHATSAPP_LINK,
							target: "_blank",
							rel: "noreferrer",
							className: "ios-row mt-4 flex items-center justify-center gap-2 rounded-[1.4rem] bg-cream px-5 py-4 font-sans text-[0.9rem] tracking-[0.02em] text-ivory backdrop-blur-xl transition active:scale-[0.98]",
							style: { animationDelay: "300ms" },
							children: ["WhatsApp ", "+91 63007 90881"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-center font-sans text-[0.6rem] uppercase tracking-[0.3em] text-stone/70",
							children: "Little charms. Big memories."
						})
					]
				})]
			}), document.body)
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "grain relative bg-ink px-5 py-16 text-ivory md:px-10 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-4 md:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tracking-[0.15em]",
						children: "Charmelle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "script mt-3 text-2xl text-gold",
						children: "Little charms, big memories."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Shop"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 font-sans text-[0.7rem] font-light text-ivory/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "hover:text-ivory",
								children: "All pieces"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/customise",
								className: "hover:text-ivory",
								children: "Customise"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/collections",
								search: { c: "gifts" },
								className: "hover:text-ivory",
								children: "Gifts"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Brand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 font-sans text-[0.7rem] font-light text-ivory/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/our-story",
								className: "hover:text-ivory",
								children: "Our story"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal",
								className: "hover:text-ivory",
								children: "Journal"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/wishlist",
								className: "hover:text-ivory",
								children: "Wishlist"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 font-sans text-[0.7rem] font-light text-ivory/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["WhatsApp: ", WHATSAPP_DISPLAY] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-ivory",
							children: INSTAGRAM_HANDLE
						}) })]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-sans text-[0.6rem] uppercase tracking-[0.25em] text-ivory/40",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Charmelle"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "script text-xl text-gold/70",
					children: "Made with love."
				})]
			})]
		})
	});
}
function FloatingWhatsApp() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: GENERAL_WHATSAPP_LINK,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: `fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "h-5 w-5",
			strokeWidth: 1.6
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-sans text-[0.6rem] uppercase tracking-[0.2em]",
			children: "Chat"
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var orgJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Charmelle",
	description: "Handmade charm jewellery. Little charms, big memories.",
	contactType: "customer service",
	url: "https://charmelle.jewellery"
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-obsidian px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "script text-3xl text-gold",
				children: "Lost a charm?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-lg mt-4 text-espresso",
				children: "404."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body-lg mt-4 text-stone",
				children: "The page you're looking for doesn't exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
				children: "Back home"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-obsidian px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "script text-3xl text-gold",
				children: "A charm slipped."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-md mt-4 text-espresso",
				children: "This page didn't load."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body-lg mt-4 text-stone",
				children: "Something went wrong on our end. Try refreshing."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "btn-gold px-8 py-3 font-sans text-[0.62rem] uppercase tracking-[0.3em]",
					children: "Try again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "border border-espresso/20 px-8 py-3 font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
					children: "Go home"
				})]
			})
		]
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "description",
				content: "Charmelle — handmade charm jewellery. Little charms, big memories. Order on WhatsApp."
			},
			{
				name: "author",
				content: "Charmelle"
			},
			{
				property: "og:title",
				content: "Charmelle — Handmade Charm Jewellery"
			},
			{
				property: "og:description",
				content: "Little charms. Big memories. Handmade charm jewellery for the moments you don't want to forget."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&family=Pinyon+Script&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(orgJsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: pathname === "/" ? void 0 : "pt-24 md:pt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}, pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-CfCQ6ERf.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({
		title: "Charmelle — Handmade Charm Jewellery | Little Charms, Big Memories",
		meta: [
			{
				name: "description",
				content: "Handmade charm jewellery made by hand and ordered on WhatsApp. Build your own charm bracelet and wear your memories."
			},
			{
				property: "og:title",
				content: "Charmelle — Handmade Charm Jewellery"
			},
			{
				property: "og:description",
				content: "Little charms. Big memories. Handmade charm jewellery for the moments you don't want to forget."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./cart-ARK2M2aB.mjs");
var Route$4 = createFileRoute("/cart")({
	head: () => ({
		title: "Your Bag — Charmelle",
		meta: [
			{
				name: "description",
				content: "Review your Charmelle pieces and place your order on WhatsApp."
			},
			{
				property: "og:title",
				content: "Your Bag — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./customise-_6IDuBe-.mjs");
var Route$3 = createFileRoute("/customise")({
	head: () => ({
		title: "Customise Your Charm Bracelet — Charmelle",
		meta: [
			{
				name: "description",
				content: "Build your own handmade charm bracelet. Choose up to 5 charms, add an initial, and order on WhatsApp."
			},
			{
				property: "og:title",
				content: "Customise — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./journal-C5uPX6-D.mjs");
var Route$2 = createFileRoute("/journal")({
	head: () => ({
		title: "Journal — Charmelle",
		meta: [
			{
				name: "description",
				content: "Stories, guides and notes from the Charmelle studio."
			},
			{
				property: "og:title",
				content: "Journal — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./our-story-C3DiOQx5.mjs");
var Route$1 = createFileRoute("/our-story")({
	head: () => ({
		title: "Our Story — Charmelle Handmade Charm Jewellery",
		meta: [
			{
				name: "description",
				content: "Charmelle began at a kitchen table with a single charm. Every piece is assembled, finished and wrapped by hand."
			},
			{
				property: "og:title",
				content: "Our Story — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wishlist-3k3rxZyz.mjs");
var Route = createFileRoute("/wishlist")({
	head: () => ({
		title: "Wishlist — Charmelle",
		meta: [
			{
				name: "description",
				content: "Your saved Charmelle pieces."
			},
			{
				property: "og:title",
				content: "Wishlist — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	CartRoute: Route$4.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$6
	}),
	CollectionsRoute: Route$7.update({
		id: "/collections",
		path: "/collections",
		getParentRoute: () => Route$6
	}),
	CustomiseRoute: Route$3.update({
		id: "/customise",
		path: "/customise",
		getParentRoute: () => Route$6
	}),
	JournalRoute: Route$2.update({
		id: "/journal",
		path: "/journal",
		getParentRoute: () => Route$6
	}),
	OurStoryRoute: Route$1.update({
		id: "/our-story",
		path: "/our-story",
		getParentRoute: () => Route$6
	}),
	ShopRoute: Route$9.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$6
	}),
	WishlistRoute: Route.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$6
	}),
	ProductSlugRoute: Route$8.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
