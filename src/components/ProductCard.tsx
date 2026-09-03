import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import { formatPrice, type Product } from "@/data/products";
import { readWishlist, subscribeWishlist, toggleWishlist } from "@/lib/wishlist";

export default function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  const [liked, setLiked] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const sync = () => setLiked(readWishlist().includes(product.slug));
    sync();
    return subscribeWishlist(sync);
  }, [product.slug]);

  return (
    <article className="group relative">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-cream"
      >
        <img
          src={product.image}
          alt={`${product.name} — handmade charm bracelet by Charmelle`}
          loading="lazy"
          className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </Link>

      <button
        type="button"
        aria-label={liked ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        aria-pressed={liked}
        onClick={() => {
          toggleWishlist(product.slug);
          setPulse(true);
          window.setTimeout(() => setPulse(false), 400);
        }}
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ivory/85 backdrop-blur transition-colors hover:bg-ivory"
      >
        <Heart
          className={`h-4 w-4 transition-transform duration-300 ${pulse ? "scale-125" : "scale-100"} ${
            liked ? "fill-espresso text-espresso" : "text-espresso/60"
          }`}
        />
      </button>

      {product.bestseller ? (
        <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[0.6rem] uppercase tracking-luxe text-espresso">
          Loved most
        </span>
      ) : null}

      <div className="mt-4 space-y-1">
        <h3 className="text-xl leading-tight text-espresso">
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{product.tagline}</p>
        <p className="pt-1 text-sm tracking-wide text-espresso">{formatPrice(product.price)}</p>
      </div>

      {onQuickView ? (
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="mt-3 text-[0.65rem] uppercase tracking-luxe text-wood underline-offset-4 transition-colors hover:text-espresso hover:underline"
        >
          Quick view
        </button>
      ) : null}
    </article>
  );
}
