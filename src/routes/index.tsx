import { createFileRoute } from "@tanstack/react-router";

import Footer from "@/components/Footer";
import GiftSection from "@/components/GiftSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Parallax, Reveal } from "@/components/Reveal";
import ScrollCanvas from "@/components/ScrollCanvas";
import Testimonials from "@/components/Testimonials";
import { ExternalCta, LinkCta, SectionLabel } from "@/components/ui-bits";
import { products } from "@/data/products";
import { createWhatsAppGeneralLink, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/whatsapp";

const title = "Charmelle — Handmade Charm Bracelets & Keepsake Charms";
const description =
  "Charmelle makes hand-assembled charm bracelets and keepsake charms in small batches. Build your own bracelet and order over WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const featured = products.filter((p) => p.bestseller).slice(0, 6);

function Index() {
  return (
    <div className="bg-ivory">
      <Navbar />

      <main>
        {/* Hero — canvas 1 */}
        <section className="relative">
          <ScrollCanvas
            frameDir="/videos/video-01"
            frameCount={300}
            scrollHeight="280vh"
            priority
            ariaLabel="Charmelle charm bracelets being turned in the light"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 md:px-10 md:pb-32">
              <div className="max-w-xl space-y-6">
                <SectionLabel light>Handmade charm jewellery</SectionLabel>
                <h1 className="text-5xl leading-[1.05] text-ivory md:text-7xl">
                  Little charms,
                  <br />
                  big memories.
                </h1>
                <p className="max-w-md text-sm leading-relaxed text-ivory/75">
                  Every bracelet is knotted, charmed and packed by hand — in small batches, never
                  factory runs. Tell us the story and we&apos;ll build it around your wrist.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <LinkCta to="/shop" tone="light">
                    Shop the collection
                  </LinkCta>
                  <LinkCta to="/customise" tone="ghost" className="text-ivory">
                    Customise yours
                  </LinkCta>
                </div>
              </div>
            </div>
          </ScrollCanvas>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <SectionLabel>Made by hand</SectionLabel>
              <p className="mt-6 font-script text-3xl text-wood md:text-4xl">Made with love</p>
            </Reveal>
            <Reveal delay={120} className="space-y-6 md:col-span-7">
              <h2 className="text-3xl leading-snug text-espresso md:text-5xl">
                Not mass-made. Not maybe-made. Made for you, one at a time.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:max-w-lg">
                We work in tiny batches so every charm gets chosen on purpose — the butterfly for a
                new beginning, the key for the person who kept you safe, the letter for the words
                that never made it out. Nothing here is a stock photo of a promise.
              </p>
              <LinkCta to="/our-story">Read our story</LinkCta>
            </Reveal>
          </div>
        </section>

        {/* Canvas 2 */}
        <section className="relative">
          <ScrollCanvas
            frameDir="/videos/video-02"
            frameCount={300}
            scrollHeight="260vh"
            ariaLabel="Close detail of charms being assembled by hand"
            backdropClassName="bg-espresso"
          >
            <div className="mx-auto flex h-full max-w-7xl items-center px-5 md:px-10">
              <div className="max-w-md space-y-5 md:ml-auto md:text-right">
                <SectionLabel light>In the making</SectionLabel>
                <h2 className="text-4xl leading-tight text-ivory md:text-6xl">
                  Knotted, charmed, checked twice.
                </h2>
                <p className="text-sm leading-relaxed text-ivory/75">
                  Each piece passes through the same pair of hands from the first knot to the final
                  wrap — which is why no two are ever perfectly identical.
                </p>
              </div>
            </div>
          </ScrollCanvas>
        </section>

        {/* Featured */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
          <Reveal className="flex flex-col gap-4 pb-14 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <SectionLabel>Loved most</SectionLabel>
              <h2 className="text-3xl leading-snug text-espresso md:text-5xl">
                The pieces that keep leaving
              </h2>
            </div>
            <LinkCta to="/shop" tone="ghost" className="text-espresso self-start md:self-auto">
              View all
            </LinkCta>
          </Reveal>
          <ProductGrid items={featured} />
        </section>

        {/* Canvas 3 */}
        <section className="relative">
          <ScrollCanvas
            frameDir="/videos/video-03"
            frameCount={300}
            scrollHeight="260vh"
            ariaLabel="Charmelle bracelets worn and styled"
            backdropClassName="bg-espresso-deep"
          >
            <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-24 md:px-10 md:pb-32">
              <div className="max-w-lg space-y-6">
                <SectionLabel light>Wear it your way</SectionLabel>
                <h2 className="text-4xl leading-tight text-ivory md:text-6xl">
                  Build a bracelet that only makes sense to you.
                </h2>
                <p className="text-sm leading-relaxed text-ivory/75">
                  Pick your charms, tell us the story behind them, and we&apos;ll send the mock-up
                  before anything is made.
                </p>
                <LinkCta to="/customise" tone="gold">
                  Start customising
                </LinkCta>
              </div>
            </div>
          </ScrollCanvas>
        </section>

        <GiftSection />

        {/* Story strip */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <Parallax strength={18}>
              <img
                src="/images/editorial/atelier.jpg"
                alt="Charms and tools laid out on a work table"
                loading="lazy"
                className="w-full object-cover"
              />
            </Parallax>
            <Reveal className="space-y-6">
              <SectionLabel>Ordering</SectionLabel>
              <h2 className="text-3xl leading-snug text-espresso md:text-4xl">
                One message is all it takes
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We take every order on WhatsApp so we can confirm charms, sizing and gift notes
                before making anything. Send the piece you like — we&apos;ll reply with the details.
              </p>
              <div className="flex flex-wrap gap-3">
                <ExternalCta href={createWhatsAppGeneralLink()}>Message us on WhatsApp</ExternalCta>
                <ExternalCta href={INSTAGRAM_URL} tone="ghost" className="text-espresso">
                  {INSTAGRAM_HANDLE}
                </ExternalCta>
              </div>
            </Reveal>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
