import { createFileRoute } from "@tanstack/react-router";

import CustomisationBuilder from "@/components/CustomisationBuilder";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import ScrollCanvas from "@/components/ScrollCanvas";
import { SectionLabel } from "@/components/ui-bits";

const title = "Customise Your Charm Bracelet — Charmelle";
const description =
  "Design your own handmade charm bracelet: choose your charms, see an estimate, and finish the order with us on WhatsApp.";

export const Route = createFileRoute("/customise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CustomisePage,
});

const steps = [
  { n: "01", t: "Choose your charms", c: "Pick the pieces that mean something. We'll tell you what works together." },
  { n: "02", t: "We assemble by hand", c: "Knotted, checked and finished in our small batch studio in 2–4 days." },
  { n: "03", t: "It arrives wrapped", c: "Packed with a note, ready to gift or keep for yourself." },
];

function CustomisePage() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main>
        <ScrollCanvas
          frameDir="/videos/video-03"
          frameCount={300}
          scrollHeight="220vh"
          ariaLabel="Charms being arranged by hand"
        >
          <div className="absolute inset-0 bg-espresso-deep/40" aria-hidden="true" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-ivory">
            <SectionLabel light>Customise</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-4xl leading-tight md:text-7xl">
              Make one that only exists for you
            </h1>
            <p className="mt-6 max-w-xl text-sm text-ivory/75">
              No two custom bracelets we've made are the same. Yours won't be either.
            </p>
          </div>
        </ScrollCanvas>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <CustomisationBuilder />
        </section>

        <section className="bg-cream py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal className="mb-14 space-y-3">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="text-3xl text-espresso md:text-5xl">Three steps, one conversation</h2>
            </Reveal>
            <ol className="grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 120} as="li" className="space-y-3">
                  <span className="block font-display text-4xl text-champagne">{s.n}</span>
                  <h3 className="text-2xl text-espresso">{s.t}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.c}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
