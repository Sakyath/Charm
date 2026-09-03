import { createFileRoute } from "@tanstack/react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ExternalCta, SectionLabel } from "@/components/ui-bits";
import { journalEntries } from "@/data/products";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/whatsapp";

const title = "Journal — Notes on Charms & Gifting | Charmelle";
const description =
  "Short notes from the Charmelle studio: building a charm story, caring for handmade jewellery, and choosing gifts that last.";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <header className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="max-w-2xl space-y-4">
            <SectionLabel>Journal</SectionLabel>
            <h1 className="text-4xl leading-tight text-espresso md:text-6xl">
              Notes from the table where they're made
            </h1>
          </Reveal>
        </header>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-3">
            {journalEntries.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 110} as="article" className="group">
                <div className="overflow-hidden bg-cream">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[0.65rem] uppercase tracking-luxe text-wood">{entry.readTime}</p>
                <h2 className="mt-2 text-2xl leading-tight text-espresso">{entry.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-cream py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <SectionLabel>On Instagram</SectionLabel>
                <h2 className="text-3xl text-espresso md:text-4xl">{INSTAGRAM_HANDLE}</h2>
              </div>
              <ExternalCta href={INSTAGRAM_URL} tone="ghost" className="text-espresso">
                Follow along
              </ExternalCta>
            </Reveal>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
                <a
                  key={n}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden bg-beige"
                >
                  <img
                    src={`/images/editorial/ig-${n}.jpg`}
                    alt={`Charmelle on Instagram, post ${n}`}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
