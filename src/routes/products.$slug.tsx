import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { ExternalCta, SectionLabel } from "@/components/ui-bits";
import { formatPrice, getProduct, products } from "@/data/products";
import { createWhatsAppOrderLink } from "@/lib/whatsapp";
import { readWishlist, subscribeWishlist, toggleWishlist } from "@/lib/wishlist";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ loaderData }) => {
    const product = loaderData ? getProduct(loaderData.slug) : undefined;
    if (!product) {
      return { meta: [{ title: "Unavailable — Charmelle" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${product.name} — Charmelle`;
    const description = `${product.tagline}. ${product.story.slice(0, 110)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.story,
            brand: { "@type": "Brand", name: "Charmelle" },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const product = getProduct(slug);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const sync = () => setLiked(readWishlist().includes(slug));
    sync();
    return subscribeWishlist(sync);
  }, [slug]);

  if (!product) throw notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-ivory">
      <Navbar />
      <main className="pt-24">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pb-6 md:px-10">
          <ol className="flex gap-2 text-[0.65rem] uppercase tracking-luxe text-wood">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-espresso">{product.name}</li>
          </ol>
        </nav>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal>
            <img
              src={product.image}
              alt={`${product.name} — handmade charm bracelet`}
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center gap-6">
            <div className="space-y-3">
              <SectionLabel>{product.collection} collection</SectionLabel>
              <h1 className="text-4xl leading-tight text-espresso md:text-5xl">{product.name}</h1>
              <p className="font-script text-3xl text-wood">{product.tagline}</p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">{product.story}</p>
            <p className="text-xl text-espresso">{formatPrice(product.price)}</p>

            <ul className="space-y-2 border-y border-border py-6 text-sm text-muted-foreground">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="text-gold">
                    ·
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <ExternalCta href={createWhatsAppOrderLink(product)} tone="dark">
                Order on WhatsApp
              </ExternalCta>
              <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                aria-pressed={liked}
                className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-luxe text-wood transition-colors hover:text-espresso"
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-espresso text-espresso" : ""}`} />
                {liked ? "Saved" : "Save for later"}
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Every order is confirmed personally over WhatsApp — sizing, charms and delivery included.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
          <Reveal className="mb-10 space-y-3">
            <SectionLabel>You may also love</SectionLabel>
            <h2 className="text-3xl text-espresso md:text-4xl">Pieces with a similar feeling</h2>
          </Reveal>
          <ProductGrid items={related} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
