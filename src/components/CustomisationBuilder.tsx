import { useMemo, useState } from "react";

import { ExternalCta, SectionLabel } from "@/components/ui-bits";
import { BASE_BRACELET_PRICE, charmOptions, formatPrice } from "@/data/products";
import { createWhatsAppCustomLink } from "@/lib/whatsapp";

export default function CustomisationBuilder() {
  const [selected, setSelected] = useState<string[]>([]);

  const chosen = useMemo(
    () => charmOptions.filter((c) => selected.includes(c.id)),
    [selected],
  );
  const estimate = BASE_BRACELET_PRICE + chosen.reduce((sum, c) => sum + c.price, 0);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));

  return (
    <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
      <div>
        <SectionLabel>Step one</SectionLabel>
        <h2 className="mt-3 text-3xl text-espresso md:text-4xl">Choose your charms</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Pick as many as feel right. Three to five is our favourite balance, but there are no rules here.
        </p>

        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
          {charmOptions.map((charm) => {
            const active = selected.includes(charm.id);
            return (
              <li key={charm.id}>
                <button
                  type="button"
                  onClick={() => toggle(charm.id)}
                  aria-pressed={active}
                  className={`w-full border px-5 py-4 text-left transition-all duration-300 ${
                    active
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-border bg-ivory text-espresso hover:border-espresso/50"
                  }`}
                >
                  <span className="block text-base">{charm.label}</span>
                  <span
                    className={`mt-1 block text-xs ${active ? "text-ivory/70" : "text-muted-foreground"}`}
                  >
                    {charm.meaning} · {formatPrice(charm.price)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <aside className="h-fit border border-border bg-cream p-7 md:p-9 lg:sticky lg:top-28">
        <SectionLabel>Your bracelet</SectionLabel>
        <p className="mt-3 font-script text-3xl text-wood">Little charms, big memories.</p>

        <dl className="mt-7 space-y-3 text-sm text-espresso">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Hand-knotted base</dt>
            <dd>{formatPrice(BASE_BRACELET_PRICE)}</dd>
          </div>
          {chosen.map((c) => (
            <div key={c.id} className="flex justify-between">
              <dt className="text-muted-foreground">{c.label}</dt>
              <dd>{formatPrice(c.price)}</dd>
            </div>
          ))}
          <div className="flex justify-between border-t border-border pt-3 text-base">
            <dt>Estimate</dt>
            <dd>{formatPrice(estimate)}</dd>
          </div>
        </dl>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          An estimate, not a checkout. We confirm the final piece, sizing and delivery with you on WhatsApp.
        </p>

        <ExternalCta
          href={createWhatsAppCustomLink(chosen.map((c) => c.label), estimate)}
          tone="dark"
          className="mt-6 w-full"
        >
          Send my design
        </ExternalCta>

        {selected.length ? (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="mt-4 w-full text-[0.65rem] uppercase tracking-luxe text-wood hover:text-espresso"
          >
            Start over
          </button>
        ) : null}
      </aside>
    </div>
  );
}
