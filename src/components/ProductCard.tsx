import { useState, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Eye, ShoppingBag, MessageCircle } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { createWhatsAppOrderLink } from "@/lib/whatsapp";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

type Props = {
  product: Product;
  onQuickView?: (product: Product) => void;
};

export function ProductCard({ product, onQuickView }: Props) {
  const [hovered, setHovered] = useState(false);
  const { has, toggle } = useWishlist();
  const { add } = useCart();
  const wished = has(product.slug);
  const img = product.images[0] ?? "";

  const moveSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      className="group spotlight glass-card p-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerMove={moveSpotlight}
    >
      <div className="relative overflow-hidden rounded-[1.1rem] bg-cream">
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <div className="product-zoom h-full w-full">
            <img
            src={img}
            alt={product.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
          </div>
        </Link>

        <button
          type="button"
          onClick={() => {
            toggle(product.slug);
            toast(wished ? "Removed from your wishlist" : "Saved to your wishlist", { description: product.name });
          }}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className={`glass-control absolute right-3 top-3 rounded-full p-2 backdrop-blur-sm transition-all ${wished ? "heart-pop" : ""}`}
        >
          <Heart className={`h-4 w-4 transition-all ${wished ? "fill-gold text-gold" : "text-ivory/80"}`} strokeWidth={1.2} />
        </button>

        {onQuickView && hovered && (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="btn-gold absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 font-sans text-[0.6rem] uppercase tracking-[0.25em]"
          >
            <Eye className="mr-1.5 inline h-3 w-3" strokeWidth={1.4} />
            Quick View
          </button>
        )}

        {product.customisable && (
          <span className="absolute left-3 top-3 rounded-full bg-gold/90 px-3 py-1 font-sans text-[0.55rem] uppercase tracking-[0.2em] text-obsidian">
            Made to order
          </span>
        )}

        <button
          type="button"
          onClick={() => {
            add(product.slug);
            toast.success("Added to your bag", { description: product.name });
          }}
          className="glass-control absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-ivory/80 transition hover:scale-110"
          aria-label={`Add ${product.name} to bag`}
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.4} />
        </button>
      </div>

      <div className="mt-4 px-1 pb-1">
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="font-display text-lg text-ivory transition-colors group-hover:text-gold">{product.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 font-sans text-[0.78rem] font-light leading-snug text-ivory/50">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-sans text-sm font-light text-gold">{formatPrice(product.price)}</span>
          <a
            href={createWhatsAppOrderLink(product)}
            target="_blank"
            rel="noreferrer"
            onPointerMove={moveSpotlight}
            className="spotlight spotlight-action glass-button flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-ivory/80"
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.4} />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
