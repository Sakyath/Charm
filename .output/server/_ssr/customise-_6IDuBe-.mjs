import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-DPMPYo_E.mjs";
import { t as CustomizationBuilder } from "./CustomizationBuilder-tIxOBkbS.mjs";
import { t as FinalCTA } from "./FinalCTA-BOT3fTZT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customise-_6IDuBe-.js
var import_jsx_runtime = require_jsx_runtime();
function CustomiseComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-obsidian px-5 pt-16 text-center md:px-10 md:pt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Make it yours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-lg mt-6 text-espresso",
						children: "CUSTOMISE."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-lg mt-6 text-stone",
						children: "No two stories are the same. Neither are our bracelets."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomizationBuilder, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
	] });
}
//#endregion
export { CustomiseComponent as component };
