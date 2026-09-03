import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ui-bits";
import { categoryFilters, collectionFilters, products } from "@/data/products";

const title = "Shop Handmade Charm Bracelets — Charmelle";
const description =
  "Browse Charmelle's handmade charm bracelets, charms and gift sets. Each piece is hand-assembled in small batches and ordered over WhatsApp.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [category, setCategory] = useState<string>("All");
  const [collection, setCollection] = useState<string>("All");

  const items = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (collection === "All" || p.collection === collection),
      ),
    [category, collection],
  );

  return (
    <div className="bg-ivory">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <header className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="max-w-2xl space-y-4">
            <SectionLabel>The shop</SectionLabel>
            <h1 className="text-4xl leading-tight text-espresso md:text-6xl">
              Every piece, hand-assembled
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Small batches, no factory runs. Choose a piece as it is, or ask us to change a charm — most of
              our orders start as a message.
            </p>
          </Reveal>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
          <div className="flex flex-col gap-5 border-y border-border py-5 md:flex-row md:items-center md:justify-between">
            <FilterRow label="Type" options={[...categoryFilters]} value={category} onChange={setCategory} />
            <FilterRow
              label="Collection"
              options={[...collectionFilters]}
              value={collection}
              onChange={setCollection}
            />
          </div>

          <p className="mt-6 text-xs uppercase tracking-luxe text-wood">
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="mt-10 pb-24">
            <ProductGrid items={items} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <span className="text-[0.65rem] uppercase tracking-luxe text-wood">{label}</span>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={value === option}
          className={`text-[0.7rem] uppercase tracking-luxe transition-colors ${
            value === option
              ? "text-espresso underline underline-offset-4"
              : "text-espresso/45 hover:text-espresso"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
