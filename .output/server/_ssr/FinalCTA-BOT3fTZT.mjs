import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCTA-BOT3fTZT.js
var import_jsx_runtime = require_jsx_runtime();
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain relative bg-cream px-5 py-24 text-center text-ivory md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "script text-3xl text-gold md:text-4xl",
					children: "Your story is waiting."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-6 text-ivory",
					children: "FIND YOUR CHARM."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mx-auto my-8 w-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-lg text-ivory/60",
					children: "Made by hand. Ordered on WhatsApp. Loved for years."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "btn-gold px-9 py-4 font-sans text-[0.65rem] uppercase tracking-[0.3em]",
						children: "Shop the collection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/customise",
						className: "border border-champagne/40 px-9 py-4 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-champagne transition-colors hover:bg-champagne/10",
						children: "Build your own"
					})]
				})
			]
		})
	});
}
//#endregion
export { FinalCTA as t };
