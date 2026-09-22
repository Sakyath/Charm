import { n as __toESM } from "../_runtime.mjs";
import { a as INSTAGRAM_URL, d as giftCategories, i as INSTAGRAM_HANDLE, l as formatPrice, m as testimonials, p as products, u as galleryImages } from "./products-DsQuuDPr.mjs";
import { a as createWhatsAppOrderLink, t as GENERAL_WHATSAPP_LINK } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CustomizationBuilder } from "./CustomizationBuilder-tIxOBkbS.mjs";
import { t as FinalCTA } from "./FinalCTA-BOT3fTZT.mjs";
import { i as HeroTransition, n as BrandStory, r as EmotionalSection, t as AboutSection } from "./AboutSection-DjAmewyc.mjs";
import { t as CapsuleReveal } from "./CapsuleReveal-BKPlUNN6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CfCQ6ERf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pad(n) {
	return String(n).padStart(3, "0");
}
function ScrollCanvas({ frameDir, frameCount, scrollHeight, objectFit, objectPosition = "center", alt, className = "", imageFilter, imageBlendMode, overlay }) {
	const wrapRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const staticRef = (0, import_react.useRef)(null);
	const imagesRef = (0, import_react.useRef)([]);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [active, setActive] = (0, import_react.useState)(false);
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	(0, import_react.useEffect)(() => {
		if (reduce || !active) return;
		let cancelled = false;
		const stride = typeof window !== "undefined" && window.innerWidth < 640 ? 2 : 1;
		const passes = [
			10,
			5,
			1
		].map((s) => Math.max(stride, s));
		const runPass = (passIdx) => {
			if (cancelled || passIdx >= passes.length) return;
			const step = passes[passIdx];
			let pending = 0;
			let started = false;
			const done = () => {
				pending -= 1;
				if (started && pending === 0) runPass(passIdx + 1);
			};
			for (let i = 0; i < frameCount; i += step) {
				if (imagesRef.current[i]) continue;
				pending += 1;
				const idx = i;
				const img = new Image();
				img.decoding = "async";
				img.src = `${frameDir}/frame-${pad(idx)}.jpg`;
				img.onload = () => {
					imagesRef.current[idx] = img;
					requestAnimationFrame(() => {
						if (cancelled) return;
						const element = wrapRef.current;
						if (!element) return;
						const total = element.getBoundingClientRect().height - window.innerHeight;
						const currentProgress = total > 0 ? Math.max(0, Math.min(1, -element.getBoundingClientRect().top / total)) : 0;
						draw(currentProgress);
					});
					done();
				};
				img.onerror = done;
			}
			started = true;
			if (pending === 0) runPass(passIdx + 1);
		};
		runPass(0);
		return () => {
			cancelled = true;
		};
	}, [
		frameDir,
		frameCount,
		reduce
	]);
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el || reduce) return;
		const io = new IntersectionObserver((entries) => entries.forEach((e) => setActive(e.isIntersecting)), {
			rootMargin: "200% 0px",
			threshold: 0
		});
		io.observe(el);
		return () => io.disconnect();
	}, [reduce]);
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		let raf = 0;
		const update = () => {
			raf = 0;
			const rect = el.getBoundingClientRect();
			const vh = window.innerHeight;
			const total = rect.height - vh;
			if (total <= 0) return;
			const p = Math.max(0, Math.min(1, -rect.top / total));
			setProgress(p);
			draw(p);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		update();
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	const draw = (p) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const idx = Math.min(frameCount - 1, Math.floor(p * (frameCount - 1)));
		let img = imagesRef.current[idx];
		if (!img?.complete) for (let d = 1; d < frameCount; d++) {
			const a = imagesRef.current[idx - d];
			if (a?.complete) {
				img = a;
				break;
			}
			const b = imagesRef.current[idx + d];
			if (b?.complete) {
				img = b;
				break;
			}
		}
		if (!img?.complete) return;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const w = canvas.clientWidth;
		const h = canvas.clientHeight;
		if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
			canvas.width = w * dpr;
			canvas.height = h * dpr;
		}
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, w, h);
		const ir = img.width / img.height;
		const cr = w / h;
		let dw = w;
		let dh = h;
		if (objectFit === "cover") if (ir > cr) dw = h * ir;
		else dh = w / ir;
		else if (ir > cr) dh = w / ir;
		else dw = h * ir;
		ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
	};
	if (reduce) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative h-[80vh] ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: `${frameDir}/frame-${pad(0)}.jpg`,
			alt,
			className: "absolute inset-0 h-full w-full",
			style: {
				objectFit,
				objectPosition,
				filter: imageFilter,
				mixBlendMode: imageBlendMode
			}
		}), overlay?.(0)]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: `relative ${className}`,
		style: { height: scrollHeight },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-screen w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "absolute inset-0 h-full w-full",
					style: {
						objectFit,
						objectPosition,
						filter: imageFilter,
						mixBlendMode: imageBlendMode
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					ref: staticRef,
					src: `${frameDir}/frame-${pad(0)}.jpg`,
					alt,
					loading: "eager",
					className: "absolute inset-0 h-full w-full opacity-0",
					"aria-hidden": true
				}),
				overlay?.(progress)
			]
		})
	});
}
function HeroScroll() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollCanvas, {
		frameDir: "/videos/video-01",
		frameCount: 300,
		scrollHeight: "420vh",
		objectFit: "cover",
		objectPosition: "center",
		alt: "A handmade charm bracelet revealed in warm light",
		imageFilter: "brightness(1.35) saturate(1.08)",
		imageBlendMode: "screen",
		className: "relative bg-[#2f251c]",
		overlay: (progress) => {
			const fade1 = Math.max(0, 1 - progress * 3);
			const fade3 = Math.max(0, Math.min(1, (progress - .7) * 3));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center px-5 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							opacity: fade1,
							transition: "opacity 0.4s"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold",
								children: "Handmade charm jewellery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display-lg mt-8 text-ivory",
								children: ["LITTLE CHARMS.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic",
									children: "BIG MEMORIES."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-lg mx-auto mt-7 max-w-md",
								children: "Handmade charm jewellery for the moments you don't want to forget."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									className: "btn-gold px-10 py-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em]",
									children: "Explore Collection"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/customise",
									className: "btn-glass px-10 py-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em]",
									children: "Create Your Charm"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2",
					style: {
						opacity: fade1 * .5,
						transition: "opacity 0.4s"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-16 w-px bg-gradient-to-b from-transparent to-ivory" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-0 left-0 right-0 h-40",
					style: {
						opacity: fade3,
						transition: "opacity 0.5s",
						background: "linear-gradient(to bottom, transparent, var(--obsidian))"
					}
				})
			] });
		}
	});
}
function CapsuleMoment() {
	const hero = products.find((p) => p.featured) ?? products[0];
	if (!hero) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-obsidian px-5 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "The unboxing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-md mt-6 text-ivory",
					children: ["A capsule opens.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block italic",
						children: "A memory arrives."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lg mt-6 max-w-md",
					children: "Every Charmelle piece leaves our hands sealed in its own little capsule. Watch it open — warm light, settling glass, and the charm that carries your story."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-8 w-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-0",
					children: [
						["01", "Hand-assembled to order"],
						["02", "Sealed in its own capsule"],
						["03", "Ordered simply over WhatsApp"]
					].map(([n, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "hairline flex items-center gap-4 border-b py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs font-medium text-gold",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-[0.72rem] uppercase tracking-[0.22em] text-ivory/75",
							children: label
						})]
					}, n))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleReveal, {
					image: hero.images[0] ?? "",
					alt: hero.alt,
					eyebrow: "Inside the capsule",
					name: hero.name,
					meaning: hero.description,
					price: formatPrice(hero.price),
					href: createWhatsAppOrderLink(hero)
				})
			})]
		})
	});
}
var labels = [
	{
		start: .1,
		end: .25,
		text: "Butterfly",
		sub: "for change"
	},
	{
		start: .3,
		end: .45,
		text: "Heart",
		sub: "for love"
	},
	{
		start: .5,
		end: .65,
		text: "Key",
		sub: "for beginnings"
	},
	{
		start: .7,
		end: .85,
		text: "Initial",
		sub: "for you"
	}
];
function CharmShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollCanvas, {
		frameDir: "/videos/video-02",
		frameCount: 300,
		scrollHeight: "440vh",
		objectFit: "cover",
		objectPosition: "center",
		alt: "Macro detail of individual handmade charms",
		className: "relative",
		overlay: (progress) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center px-5 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					opacity: progress < .1 || progress > .9 ? 1 : 0,
					transition: "opacity 0.6s"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "The charms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 text-ivory",
						children: "EVERY DETAIL."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lg mt-4 text-ivory/60",
						children: "A charm for every meaning."
					})
				]
			}), labels.map((label) => {
				const visible = progress >= label.start && progress <= label.end;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						opacity: visible ? 1 : 0,
						transition: "opacity 0.6s",
						position: "absolute"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: label.sub
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display-lg mt-4 text-ivory",
						children: label.text
					})]
				}, label.text);
			})]
		})] })
	});
}
function WearingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollCanvas, {
		frameDir: "/videos/video-03",
		frameCount: 300,
		scrollHeight: "400vh",
		objectFit: "cover",
		objectPosition: "center",
		alt: "Wearing handmade charm jewellery",
		className: "relative",
		overlay: (progress) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							opacity: progress < .33 ? 1 : 0,
							transition: "opacity 0.5s",
							position: "absolute"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Wear it"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-6 text-ivory",
							children: "WORN YOUR WAY."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							opacity: progress >= .33 && progress < .66 ? 1 : 0,
							transition: "opacity 0.5s",
							position: "absolute"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-md text-ivory",
							children: "Small details."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-md italic text-gold",
							children: "Personal stories."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							opacity: progress >= .66 ? 1 : 0,
							transition: "opacity 0.5s",
							position: "absolute"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "script text-4xl text-gold md:text-6xl",
							children: "Little charms,"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "script text-4xl text-gold md:text-6xl",
							children: "big memories."
						})]
					})
				]
			})] });
		}
	});
}
function GiftSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-obsidian px-5 py-24 md:px-10 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Gifting"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-espresso",
					children: "GIFT A MEMORY."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lg mt-6 text-stone",
					children: "For the people who are hard to shop for — because they already have everything except a story."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 grid max-w-[1400px] gap-6 md:grid-cols-3",
			children: giftCategories.map((gift, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: GENERAL_WHATSAPP_LINK,
					target: "_blank",
					rel: "noreferrer",
					className: "group block overflow-hidden bg-cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: gift.image,
								alt: gift.name,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-6 text-ivory",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl",
										children: gift.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-sans text-[0.7rem] font-light text-ivory/80",
										children: gift.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-champagne",
										children: gift.price
									})
								]
							})
						]
					})
				})
			}, gift.name))
		})]
	});
}
function InstagramGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-cream px-5 py-24 md:px-10 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "From the gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-espresso",
					children: "@charmelle"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-12 grid max-w-[1400px] grid-cols-2 gap-3 md:grid-cols-3 md:gap-4",
				children: galleryImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: INSTAGRAM_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "group block overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "aspect-square w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
						})
					})
				}, img.src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: INSTAGRAM_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
					children: ["Follow ", INSTAGRAM_HANDLE]
				})
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-obsidian px-5 py-24 md:px-10 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-gold",
				children: "Loved & worn"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mt-6 text-espresso",
				children: "KIND WORDS."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-14 grid max-w-[1400px] gap-8 md:grid-cols-3",
			children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "border border-espresso/10 bg-cream p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "script text-3xl text-gold",
							children: "\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-sm font-light leading-relaxed text-gold",
							children: t.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold my-5 w-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-espresso",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.65rem] uppercase tracking-[0.2em] text-stone",
							children: t.location
						})
					]
				})
			}, t.name))
		})]
	});
}
function ChooseYourStory() {
	const featured = products.filter((p) => p.featured).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-obsidian px-5 py-24 md:px-10 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "The collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-6 text-espresso",
						children: "CHOOSE YOUR STORY."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lg mt-6 text-stone",
						children: "A few of our favourite pieces. Each one made by hand."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-14 grid max-w-[1400px] grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-8",
				children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0] ?? "",
									alt: p.alt,
									loading: "lazy",
									className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg text-espresso",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-sm font-light text-gold",
								children: formatPrice(p.price)
							})
						]
					})
				}, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
					children: "View all pieces"
				})
			})
		]
	});
}
function HomeComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroTransition, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandStory, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleMoment, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharmShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChooseYourStory, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WearingSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomizationBuilder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmotionalSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramGallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { HomeComponent as component };
