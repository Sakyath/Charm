import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-eceWdQm4.js
var $$splitComponentImporter = () => import("./collections-CeStuL7z.mjs");
var Route = createFileRoute("/collections")({
	head: () => ({
		title: "Collections — Charmelle",
		meta: [
			{
				name: "description",
				content: "Browse Charmelle collections — charm bracelets, beaded bracelets, necklaces and gifts."
			},
			{
				property: "og:title",
				content: "Collections — Charmelle"
			},
			{
				property: "og:type",
				content: "website"
			}
		]
	}),
	validateSearch: objectType({ c: stringType().optional() }).parse,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
