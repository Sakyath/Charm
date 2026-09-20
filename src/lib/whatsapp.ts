import { WHATSAPP_NUMBER, type Product, customCharms, formatPrice } from "@/data/products";

function buildLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppOrderLink(product: Product): string {
  const message = [
    `Hi Charmelle! 💛`,
    ``,
    `I'd like to order:`,
    `• ${product.name}`,
    ``,
    `Could you share availability and next steps?`,
  ].join("\n");
  return buildLink(message);
}

export function createWhatsAppCartOrderLink(items: Array<{ product: Product; quantity: number }>): string {
  const lines = items.map(
    ({ product, quantity }) => `• ${product.name} x${quantity} — ${formatPrice(product.price * quantity)}`,
  );
  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
  const message = [
    `Hi Charmelle! 💛`,
    ``,
    `I'd like to place an order for:`,
    ...lines,
    ``,
    `Total: ${formatPrice(total)}`,
    ``,
    `Could you confirm availability and share the next steps?`,
  ].join("\n");
  return buildLink(message);
}

export function createWhatsAppCustomLink(
  charmIds: string[],
  estimatePaise: number,
  initial?: string,
): string {
  const names = charmIds
    .map((id) => customCharms.find((c) => c.id === id)?.name ?? id)
    .join(", ");
  const lines = [
    `Hi Charmelle! 💛`,
    ``,
    `I'd like to create a custom charm bracelet.`,
    `Charms: ${names || "none yet"}`,
  ];
  if (initial) lines.push(`Initial: ${initial.toUpperCase()}`);
  lines.push(`Estimated price: ₹${(estimatePaise / 100).toLocaleString("en-IN")}`);
  lines.push(``, `Could you confirm and take it from here?`);
  return buildLink(lines.join("\n"));
}

export function createWhatsAppInquiryLink(message: string): string {
  return buildLink(`Hi Charmelle! 💛\n\n${message}`);
}

export const GENERAL_WHATSAPP_LINK = buildLink(
  "Hi Charmelle! 💛\n\nI'd love to know more about your charm jewellery.",
);
