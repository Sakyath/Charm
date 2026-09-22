import { f as productBySlug } from "./products-DsQuuDPr.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BtFnGVCL.js
var $$splitComponentImporter = () => import("./product._slug-BQvxrjyX.mjs");
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = productBySlug(params.slug);
		return {
			title: p ? `${p.name} — Charmelle` : "Charmelle",
			meta: [
				{
					name: "description",
					content: p?.description ?? "Handmade charm jewellery by Charmelle."
				},
				{
					property: "og:title",
					content: p ? `${p.name} — Charmelle` : "Charmelle"
				},
				{
					property: "og:type",
					content: "website"
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
