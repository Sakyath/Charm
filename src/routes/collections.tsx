import { createFileRoute } from "@tanstack/react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import ScrollCanvas from "@/components/ScrollCanvas";
import { LinkCta, SectionLabel } from "@/components/ui-bits";
import { products } from "@/data/products";

const title = "Collections — Everyday, Keepsake & Signature | Charmelle";
const description =
  "Three Charmelle collections: Everyday for daily wear, Keepsake for the pieces that hold a memory, and Signature for our most-loved charm bracelets.";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CollectionsPage,
});

const groups = [
  {
    name: "Everyday" as const,
    line: "Light enough to forget you're wearing it",
    copy: "The pieces that live on your wrist through work, weekends and everything unremarkable in between.",
  },
  {
    name: "Keepsake" as const,
    line: "For the memories you want to keep close",
    copy: "Charms chosen for a person, a place or a year. These are the ones people cry over.",
  },
  {
    name: "Signature" as const,
    line: "Our most-loved arrangements",
    copy: "The charm combinations we come back to again and again — refined over hundreds of handmade pieces.",
  },
];

function CollectionsPage() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main>
        <ScrollCanvas
          frameDir="/videos/video-02"
          frameCount={300}
          scrollHeight="240vh"
          ariaLabel="Charmelle charm bracelets photographed in natural light"
          className="bg-espresso-deep"
        >
          <div className="absolute inset-0 bg-espresso-deep/35" aria-hidden="true" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-ivory">
            <SectionLabel light>Collections</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-4xl leading-tight md:text-7xl">
              Three ways to tell your story
            </h1>
            <p className="mt-6 font-script text-3xl text-champagne md:text-4xl">
              Little charms, big memories.
            </p>
          </div>
        </ScrollCanvas>

        {groups.map((group, i) => {
          const items = products.filter((p) => p.collection === group.name);
          return (
            <section
              key={group.name}
              className={`py-24 md:py-32 ${i % 2 === 0 ? "bg-ivory" : "bg-cream"}`}
            >
              <div className="mx-auto max-w-7xl px-5 md:px-10">
                <Reveal className="mb-12 max-w-2xl space-y-4">
                  <SectionLabel>{group.name}</SectionLabel>
                  <h2 className="text-3xl leading-tight text-espresso md:text-5xl">{group.line}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{group.copy}</p>
                </Reveal>
                <ProductGrid items={items} />
              </div>
            </section>
          );
        })}

        <section className="bg-espresso-deep py-24 text-center text-ivory md:py-32">
          <Reveal className="mx-auto max-w-2xl space-y-6 px-5">
            <h2 className="text-3xl md:text-5xl">Can't decide? Build your own.</h2>
            <p className="text-sm text-ivory/70">
              Choose the charms that mean something and we'll assemble the piece by hand.
            </p>
            <LinkCta to="/customise" tone="gold">
              Start customising
            </LinkCta>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
