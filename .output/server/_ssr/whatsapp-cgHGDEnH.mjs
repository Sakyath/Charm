import { c as customCharms, l as formatPrice, s as WHATSAPP_NUMBER } from "./products-DsQuuDPr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-cgHGDEnH.js
function buildLink(message) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function createWhatsAppOrderLink(product) {
	return buildLink([
		`Hi Charmelle! 💛`,
		``,
		`I'd like to order:`,
		`• ${product.name}`,
		``,
		`Could you share availability and next steps?`
	].join("\n"));
}
function createWhatsAppCartOrderLink(items) {
	const lines = items.map(({ product, quantity }) => `• ${product.name} x${quantity} — ${formatPrice(product.price * quantity)}`);
	const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
	return buildLink([
		`Hi Charmelle! 💛`,
		``,
		`I'd like to place an order for:`,
		...lines,
		``,
		`Total: ${formatPrice(total)}`,
		``,
		`Could you confirm availability and share the next steps?`
	].join("\n"));
}
function createWhatsAppCustomLink(charmIds, estimatePaise, initial) {
	const lines = [
		`Hi Charmelle! 💛`,
		``,
		`I'd like to create a custom charm bracelet.`,
		`Charms: ${charmIds.map((id) => customCharms.find((c) => c.id === id)?.name ?? id).join(", ") || "none yet"}`
	];
	if (initial) lines.push(`Initial: ${initial.toUpperCase()}`);
	lines.push(`Estimated price: ₹${(estimatePaise / 100).toLocaleString("en-IN")}`);
	lines.push(``, `Could you confirm and take it from here?`);
	return buildLink(lines.join("\n"));
}
function createWhatsAppInquiryLink(message) {
	return buildLink(`Hi Charmelle! 💛\n\n${message}`);
}
var GENERAL_WHATSAPP_LINK = buildLink("Hi Charmelle! 💛\n\nI'd love to know more about your charm jewellery.");
//#endregion
export { createWhatsAppOrderLink as a, createWhatsAppInquiryLink as i, createWhatsAppCartOrderLink as n, createWhatsAppCustomLink as r, GENERAL_WHATSAPP_LINK as t };
