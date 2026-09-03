import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { LinkCta, SectionLabel } from "@/components/ui-bits";
import { products } from "@/data/products";
import { readWishlist, subscribeWishlist } from "@/lib/wishlist";

const title = "Your Wishlist — Charmelle";
const description = "The Charmelle pieces you've saved for later, kept on your device.";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const [slugs, setSlugs] = useState<string[] | null>(null);

  useEffect(() => {
    const sync = () => setSlugs(readWishlist());
    sync();
    return subscribeWishlist(sync);
  }, []);

  const items = products.filter((p) => (slugs ?? []).includes(p.slug));

  return (
    <div className="bg-ivory">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <header className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="max-w-2xl space-y-4">
            <SectionLabel>Saved</SectionLabel>
            <h1 className="text-4xl leading-tight text-espresso md:text-6xl">Your wishlist</h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kept on this device, waiting for whenever you're ready.
            </p>
          </Reveal>
        </header>

        <section className="mx-auto max-w-7xl px-5 py-16 pb-28 md:px-10 md:py-24">
          {slugs === null ? (
            <p className="py-16 text-center text-sm text-muted-foreground">Loading your saved pieces…</p>
          ) : items.length ? (
            <ProductGrid items={items} />
          ) : (
            <div className="space-y-6 py-16 text-center">
              <p className="font-script text-3xl text-wood">Nothing saved yet</p>
              <p className="text-sm text-muted-foreground">
                Tap the heart on any piece and it will wait for you here.
              </p>
              <div>
                <LinkCta to="/shop" tone="dark">
                  Browse the shop
                </LinkCta>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
