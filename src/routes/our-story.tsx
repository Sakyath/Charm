import { createFileRoute } from "@tanstack/react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Parallax, Reveal } from "@/components/Reveal";
import { ExternalCta, SectionLabel } from "@/components/ui-bits";
import { createWhatsAppGeneralLink } from "@/lib/whatsapp";

const title = "Our Story — Charmelle Handmade Charm Jewellery";
const description =
  "How Charmelle began: handmade charm bracelets assembled in small batches, ordered through conversation rather than a cart.";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="max-w-3xl space-y-5">
            <SectionLabel>Our story</SectionLabel>
            <h1 className="text-4xl leading-tight text-espresso md:text-6xl">
              It started with one bracelet, made for someone we love
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Charmelle began at a small table, with a box of charms and no plan beyond making something that
              felt personal. The first bracelet was a gift. The second was a request. Everything since has been
              made the same way — by hand, one at a time, for one person at a time.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
          <Reveal>
            <Parallax strength={20}>
              <img
                src="/images/editorial/story.jpg"
                alt="Charmelle charm bracelets resting on a wooden surface"
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <h2 className="text-3xl leading-tight text-espresso md:text-4xl">
              Small batches, on purpose
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We don't make hundreds of the same piece. Every bracelet is knotted, adjusted and checked before
              it leaves us, which means we make fewer — and we know exactly where each one went.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If a charm doesn't sit right, we remake it. If you want a different one, we swap it. That's the
              whole advantage of being small.
            </p>
            <p className="font-script text-3xl text-wood">Made with love</p>
          </Reveal>
        </section>

        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
            <Reveal className="order-2 space-y-5 md:order-1">
              <SectionLabel>Why WhatsApp</SectionLabel>
              <h2 className="text-3xl leading-tight text-espresso md:text-4xl">
                Because a gift deserves a conversation
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                There's no cart here on purpose. Most people arrive unsure — about sizing, about which charm
                suits their sister, about whether it'll arrive in time. A quick message solves all of it, and we
                get to help you choose properly.
              </p>
              <ExternalCta href={createWhatsAppGeneralLink()} tone="dark">
                Say hello on WhatsApp
              </ExternalCta>
            </Reveal>
            <Reveal delay={120} className="order-1 md:order-2">
              <Parallax strength={-20}>
                <img
                  src="/images/editorial/atelier.jpg"
                  alt="Charms laid out before assembly"
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </Parallax>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
