import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ui-bits";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 space-y-3 text-center">
          <SectionLabel>Kind words</SectionLabel>
          <h2 className="text-3xl text-espresso md:text-5xl">Worn, gifted, kept</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 120} as="figure" className="space-y-5 text-center">
              <span aria-hidden="true" className="block font-display text-5xl text-champagne">
                &ldquo;
              </span>
              <blockquote className="text-base leading-relaxed text-espresso/80">
                {t.quote}
              </blockquote>
              <figcaption className="text-[0.65rem] uppercase tracking-luxe text-wood">
                {t.author} — {t.city}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
