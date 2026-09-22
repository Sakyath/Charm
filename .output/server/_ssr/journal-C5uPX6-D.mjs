import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FinalCTA } from "./FinalCTA-BOT3fTZT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-C5uPX6-D.js
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		title: "How to choose charms that tell your story",
		excerpt: "A gentle guide to building a bracelet that means something.",
		date: "Coming soon"
	},
	{
		title: "Behind the bench: a day in the studio",
		excerpt: "From sketch to finished piece — how a charm is made.",
		date: "Coming soon"
	},
	{
		title: "Gifting a charm: what to engrave",
		excerpt: "Ideas for the moments worth marking.",
		date: "Coming soon"
	},
	{
		title: "Caring for your gold-tone jewellery",
		excerpt: "Keep your charms glowing for years.",
		date: "Coming soon"
	}
];
function JournalComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-obsidian px-5 py-16 md:px-10 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Journal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-lg mt-6 text-espresso",
						children: "STORIES & NOTES."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lg mt-6 text-stone",
						children: "Letters from the bench. Coming soon."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-14 grid max-w-[1400px] gap-6 md:grid-cols-2",
				children: posts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-espresso/10 bg-cream p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[0.6rem] uppercase tracking-[0.25em] text-gold",
								children: post.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl text-espresso",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-sans text-sm font-light leading-relaxed text-gold",
								children: post.excerpt
							})
						]
					})
				}, post.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso",
					children: "Browse the collection"
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})] });
}
//#endregion
export { JournalComponent as component };
