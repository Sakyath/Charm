import { CapsuleReveal } from "@/components/CapsuleReveal";
import { Reveal } from "@/components/Reveal";
import { products, formatPrice } from "@/data/products";
import { createWhatsAppOrderLink } from "@/lib/whatsapp";

export function CapsuleMoment() {
  const hero = products.find((p) => p.featured) ?? products[0];
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-obsidian px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-gold">The unboxing</p>
          <h2 className="display-md mt-6 text-ivory">
            A capsule opens.
            <span className="block italic">A memory arrives.</span>
          </h2>
          <p className="body-lg mt-6 max-w-md">
            Every Charmelle piece leaves our hands sealed in its own little capsule. Watch it open — warm light,
            settling glass, and the charm that carries your story.
          </p>
          <div className="gold-rule mt-8 w-16" />
          <ul className="mt-8 space-y-0">
            {[
              ["01", "Hand-assembled to order"],
              ["02", "Sealed in its own capsule"],
              ["03", "Ordered simply over WhatsApp"],
            ].map(([n, label]) => (
              <li key={n} className="hairline flex items-center gap-4 border-b py-4">
                <span className="font-sans text-xs font-medium text-gold">{n}</span>
                <span className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-ivory/75">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <CapsuleReveal
            image={hero.images[0] ?? ""}
            alt={hero.alt}
            eyebrow="Inside the capsule"
            name={hero.name}
            meaning={hero.description}
            price={formatPrice(hero.price)}
            href={createWhatsAppOrderLink(hero)}
          />
        </Reveal>
      </div>
    </section>
  );
}
