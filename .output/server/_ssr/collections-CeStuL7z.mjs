import { p as products, r as COLLECTIONS } from "./products-DsQuuDPr.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./collections-eceWdQm4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-CeStuL7z.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsComponent() {
	const { c } = Route.useSearch();
	const keys = Object.keys(COLLECTIONS);
	const activeKey = c && c in COLLECTIONS ? c : keys[0];
	const active = COLLECTIONS[activeKey];
	const items = products.filter((p) => p.collections.includes(activeKey));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 py-16 md:px-10 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Collections"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-lg mt-6 text-espresso",
						children: [active.name.toUpperCase(), "."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lg mt-4 text-stone",
						children: active.blurb
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 flex max-w-[1400px] flex-wrap justify-center gap-x-6",
				children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/collections",
					search: { c: k },
					className: `font-sans text-[0.62rem] uppercase tracking-[0.25em] transition-colors ${k === activeKey ? "text-espresso" : "text-stone hover:text-gold"}`,
					children: COLLECTIONS[k].name
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-14 grid max-w-[1400px] grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4",
				children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						className: "group block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden bg-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0] ?? "",
								alt: p.alt,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg text-espresso",
							children: p.name
						})]
					})
				}, p.slug))
			})
		]
	});
}
//#endregion
export { CollectionsComponent as component };
