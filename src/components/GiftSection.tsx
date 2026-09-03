import { Reveal } from "@/components/Reveal";
import { ExternalCta, SectionLabel } from "@/components/ui-bits";
import { giftCategories } from "@/data/products";
import { createWhatsAppGiftLink } from "@/lib/whatsapp";

export default function GiftSection() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl space-y-4">
          <SectionLabel>Gifting</SectionLabel>
          <h2 className="text-3xl leading-tight text-espresso md:text-5xl">
            A gift she'll still be wearing next year
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Tell us who it's for and we'll help you choose the charms. Wrapped by hand, sent with a note.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {giftCategories.map((gift, i) => (
            <Reveal key={gift.title} delay={i * 110} className="group">
              <div className="overflow-hidden bg-cream">
                <img
                  src={gift.image}
                  alt={gift.title}
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-2xl text-espresso">{gift.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{gift.description}</p>
              <ExternalCta
                href={createWhatsAppGiftLink(gift.title)}
                tone="ghost"
                className="mt-5 text-espresso"
              >
                Ask for a suggestion
              </ExternalCta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
