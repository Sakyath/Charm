import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-B8rn8fNc.js
var $$splitComponentImporter = () => import("./shop-SzhcnusU.mjs");
var Route = createFileRoute("/shop")({
	head: () => ({
		title: "Shop All — Charmelle Handmade Charm Jewellery",
		meta: [
			{
				name: "description",
				content: "Shop handmade charm bracelets, beaded bracelets and necklaces. Order on WhatsApp."
			},
			{
				property: "og:title",
				content: "Shop — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	validateSearch: objectType({ q: stringType().optional() }).parse,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
