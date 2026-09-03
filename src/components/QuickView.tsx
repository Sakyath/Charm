import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";

import { ExternalCta, SectionLabel } from "@/components/ui-bits";
import { formatPrice, type Product } from "@/data/products";
import { createWhatsAppOrderLink } from "@/lib/whatsapp";

export default function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-espresso-deep/60 p-0 backdrop-blur-sm md:items-center md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} quick view`}
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 text-espresso"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid gap-0 md:grid-cols-2">
          <img
            src={product.image}
            alt={`${product.name} by Charmelle`}
            className="aspect-4/5 w-full object-cover"
          />
          <div className="flex flex-col justify-center gap-5 p-7 md:p-12">
            <SectionLabel>{product.collection} collection</SectionLabel>
            <h2 className="text-3xl leading-tight text-espresso md:text-4xl">{product.name}</h2>
            <p className="font-script text-2xl text-wood">{product.tagline}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{product.story}</p>
            <p className="text-lg text-espresso">{formatPrice(product.price)}</p>
            <div className="flex flex-wrap gap-3">
              <ExternalCta href={createWhatsAppOrderLink(product)} tone="dark">
                Order on WhatsApp
              </ExternalCta>
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                onClick={onClose}
                className="inline-flex items-center px-2 text-[0.65rem] uppercase tracking-luxe text-wood underline underline-offset-4"
              >
                Full details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
