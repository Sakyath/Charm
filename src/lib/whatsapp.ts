import { formatPrice, type Product } from "@/data/products";

export const WHATSAPP_NUMBER = "917396417317";
export const WHATSAPP_DISPLAY = "+91 73964 17317";
export const INSTAGRAM_URL = "https://www.instagram.com/charm_elle_001/";
export const INSTAGRAM_HANDLE = "@charm_elle_001";

const link = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const createWhatsAppOrderLink = (product: Product) =>
  link(
    `Hi Charmelle! I'd like to order the ${product.name} (${formatPrice(product.price)}). Could you help me with the next steps?`,
  );

export const createWhatsAppGeneralLink = () =>
  link("Hi Charmelle! I came from your website and I'd love to know more about your charm bracelets.");

export const createWhatsAppCustomLink = (charms: string[], estimate?: number) =>
  link(
    charms.length
      ? `Hi Charmelle! I'd like to design a custom bracelet with these charms: ${charms.join(", ")}.${
          estimate ? ` Estimated total: ${formatPrice(estimate)}.` : ""
        } Can we finalise it?`
      : "Hi Charmelle! I'd like to design a custom charm bracelet. Can you help me choose the charms?",
  );

export const createWhatsAppGiftLink = (title: string) =>
  link(`Hi Charmelle! I'm looking for a gift — ${title}. What would you recommend?`);
