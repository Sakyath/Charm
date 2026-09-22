import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-DPMPYo_E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className = "", delay = 0, parallax = 0, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.setTimeout(() => setVisible(true), delay);
					io.unobserve(entry.target);
				}
			});
		}, {
			threshold: .15,
			rootMargin: "0px 0px -10% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	const offset = parallax && visible ? 0 : parallax;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		ref,
		className: `reveal ${visible ? "is-visible" : ""} ${className}`,
		style: parallax ? { transform: `translateY(${offset}px)` } : void 0,
		children
	});
}
//#endregion
export { Reveal as t };
