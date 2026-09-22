import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as MessageCircle, r as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CapsuleReveal-BKPlUNN6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Cinematic 5-phase capsule opening: anticipation → activation → 3D opening → emergence → glass info panel. */
function CapsuleReveal({ image, alt, eyebrow = "The capsule", name, meaning, price, href, ctaLabel = "Order via WhatsApp", autoOpen = true, showInfo = true }) {
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const timers = (0, import_react.useRef)([]);
	const root = (0, import_react.useRef)(null);
	const reduced = (0, import_react.useRef)(false);
	const clear = (0, import_react.useCallback)(() => {
		timers.current.forEach((t) => window.clearTimeout(t));
		timers.current = [];
	}, []);
	const run = (0, import_react.useCallback)((steps) => {
		clear();
		steps.forEach(([next, delay]) => {
			timers.current.push(window.setTimeout(() => setPhase(next), delay));
		});
	}, [clear]);
	const open = (0, import_react.useCallback)(() => {
		if (reduced.current) {
			clear();
			setPhase("open");
			return;
		}
		run([
			["anticipation", 0],
			["activation", 220],
			["opening", 520],
			["emerge", 1180],
			["open", 1900]
		]);
	}, [clear, run]);
	const close = (0, import_react.useCallback)(() => {
		if (reduced.current) {
			clear();
			setPhase("idle");
			return;
		}
		run([
			["emerge", 0],
			["opening", 320],
			["activation", 820],
			["anticipation", 1100],
			["idle", 1320]
		]);
	}, [clear, run]);
	const skip = (0, import_react.useCallback)(() => {
		clear();
		setPhase("open");
	}, [clear]);
	(0, import_react.useEffect)(() => {
		reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		return clear;
	}, [clear]);
	(0, import_react.useEffect)(() => {
		if (!autoOpen || !root.current) return;
		const el = root.current;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && phase === "idle") {
					open();
					observer.disconnect();
				}
			});
		}, { threshold: .45 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [autoOpen]);
	const animating = phase !== "idle" && phase !== "open";
	const isOpen = phase === "open";
	const particles = (0, import_react.useMemo)(() => Array.from({ length: 10 }, (_, i) => ({
		left: `${8 + i * 9}%`,
		bottom: `${18 + i % 4 * 9}%`,
		delay: `${i % 5 * .42}s`
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "capsule stage-glow relative",
		"data-phase": phase,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "capsule-stage relative mx-auto aspect-[4/5] w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "capsule-interior-light pointer-events-none absolute inset-6 rounded-[2rem]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capsule-shell absolute inset-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "capsule-lid absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[2.2rem] border border-t border-ivory/12 bg-ivory/[0.055] backdrop-blur-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-6 top-4 h-[38%] rounded-full bg-gradient-to-b from-ivory/15 to-transparent" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "capsule-base absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[2.2rem] border border-ivory/12 bg-ivory/[0.035] backdrop-blur-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-10 bottom-5 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" })
						})]
					}),
					particles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "capsule-particle",
						style: {
							left: p.left,
							bottom: p.bottom,
							animationDelay: p.delay
						},
						"aria-hidden": "true"
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capsule-product absolute inset-8 overflow-hidden rounded-[1.6rem] border border-gold/20 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image,
							alt,
							loading: "lazy",
							decoding: "async",
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capsule-sweep",
							"aria-hidden": "true"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				hidden: !showInfo,
				className: "capsule-info glass-panel glass-panel-raised mx-auto -mt-8 w-[88%] max-w-sm p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-3 text-3xl italic text-ivory",
						children: name
					}),
					meaning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-sans text-[0.8rem] font-light text-ivory/55",
						children: meaning
					}),
					price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-sm text-gold",
						children: price
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col items-center gap-3",
						children: [href && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							target: "_blank",
							rel: "noreferrer",
							className: "btn-gold inline-flex items-center gap-2 px-7 py-3.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "h-3.5 w-3.5",
								strokeWidth: 1.6
							}), ctaLabel]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: isOpen ? close : open,
							className: "btn-glass px-6 py-3 font-sans text-[0.58rem] uppercase tracking-[0.25em]",
							children: isOpen ? "Close the capsule" : "Open the capsule"
						})]
					})
				]
			}),
			!showInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: isOpen ? close : open,
					className: "btn-glass px-6 py-3 font-sans text-[0.58rem] uppercase tracking-[0.25em]",
					children: isOpen ? "Close the capsule" : "Replay the opening"
				})
			}),
			animating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: skip,
				className: "btn-glass absolute right-2 top-2 z-10 inline-flex items-center gap-1.5 px-4 py-2 font-sans text-[0.55rem] uppercase tracking-[0.25em]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					className: "h-3 w-3 text-gold",
					strokeWidth: 1.6
				}), "Skip"]
			})
		]
	});
}
//#endregion
export { CapsuleReveal as t };
