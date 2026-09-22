import { n as __toESM } from "../_runtime.mjs";
import { c as customCharms, l as formatPrice, t as BRACELET_BASE_PRICE } from "./products-DsQuuDPr.mjs";
import { r as createWhatsAppCustomLink } from "./whatsapp-cgHGDEnH.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CustomizationBuilder-tIxOBkbS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomizationBuilder() {
	const [selected, setSelected] = (0, import_react.useState)(["butterfly", "heart"]);
	const [initial, setInitial] = (0, import_react.useState)("");
	const toggle = (id) => {
		setSelected((prev) => {
			const next = prev.includes(id) ? prev.filter((c) => c !== id) : prev.length < 5 ? [...prev, id] : prev;
			if (next.length !== prev.length) toast(next.includes(id) ? "Charm added" : "Charm removed", { description: customCharms.find((charm) => charm.id === id)?.name });
			return next;
		});
	};
	const estimate = BRACELET_BASE_PRICE + selected.reduce((sum, id) => {
		return sum + (customCharms.find((c) => c.id === id)?.price ?? 0);
	}, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain relative bg-ink px-5 py-24 text-ivory md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:sticky lg:top-28 lg:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Customise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-6 text-ivory",
							children: "BUILD YOUR OWN."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-lg mt-6 text-ivory/60",
							children: "Choose up to 5 charms. Add an initial. We'll make it by hand."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 overflow-hidden rounded-[1.25rem] border border-ivory/10 bg-charcoal/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/product-06.jpg",
								alt: "Custom charm bracelet preview",
								className: "aspect-[4/3] w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel glass-panel-raised mt-8 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-gold",
									children: "Your selection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-sm font-light text-ivory/40",
										children: "No charms selected"
									}) : selected.map((id) => {
										const charm = customCharms.find((c) => c.id === id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-gold/25 bg-gold/10 px-3 py-1 font-sans text-[0.65rem] text-champagne",
											children: charm?.name
										}, id);
									})
								}),
								initial && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 font-sans text-sm text-ivory/70",
									children: ["Initial: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "script text-2xl text-gold",
										children: initial.toUpperCase()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold my-5 w-12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ivory/50",
									children: "Estimated price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl text-ivory",
									children: formatPrice(estimate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: createWhatsAppCustomLink(selected, estimate, initial || void 0),
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 block btn-gold py-4 text-center font-sans text-[0.65rem] uppercase tracking-[0.3em]",
									children: "Order on WhatsApp"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Choose your charms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4",
							children: customCharms.map((charm) => {
								const isSel = selected.includes(charm.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggle(charm.id),
									"aria-pressed": isSel,
									className: `charm-option lift rounded-[1.1rem] border p-4 text-left ${isSel ? "selected" : "border-ivory/10 bg-ivory/[0.03] hover:border-gold/35 hover:bg-ivory/[0.06]"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl text-ivory",
											children: charm.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-sans text-[0.65rem] text-ivory/50",
											children: charm.meaning
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-sans text-[0.7rem] text-champagne",
											children: formatPrice(charm.price)
										})
									]
								}, charm.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow text-gold",
								htmlFor: "initial-input",
								children: "Add an initial (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "initial-input",
								type: "text",
								maxLength: 1,
								value: initial,
								onChange: (e) => setInitial(e.target.value),
								placeholder: "A",
								className: "mt-4 w-20 border border-champagne/25 bg-transparent px-4 py-3 text-center font-display text-2xl text-ivory placeholder:text-ivory/20 focus:outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-sans text-[0.7rem] font-light text-ivory/40",
							children: [selected.length, "/5 charms selected"]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { CustomizationBuilder as t };
