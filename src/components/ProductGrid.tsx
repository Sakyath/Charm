import { useState } from "react";

import ProductCard from "@/components/ProductCard";
import QuickView from "@/components/QuickView";
import { Reveal } from "@/components/Reveal";
import type { Product } from "@/data/products";

export default function ProductGrid({ items }: { items: Product[] }) {
  const [active, setActive] = useState<Product | null>(null);

  if (!items.length) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        Nothing here yet — try another filter.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-10">
        {items.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 90}>
            <ProductCard product={product} onQuickView={setActive} />
          </Reveal>
        ))}
      </div>
      <QuickView product={active} onClose={() => setActive(null)} />
    </>
  );
}
