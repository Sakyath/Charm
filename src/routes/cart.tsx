import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { formatPrice, productBySlug } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { createWhatsAppCartOrderLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/cart")({
  head: () => ({
    title: "Your Bag — Charmelle",
    meta: [
      { name: "description", content: "Review your Charmelle pieces and place your order on WhatsApp." },
      { property: "og:title", content: "Your Bag — Charmelle" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CartComponent,
});

function CartComponent() {
  const { items, updateQuantity, remove } = useCart();
  const cartItems = items
    .map((item) => ({ ...item, product: productBySlug(item.slug) }))
    .filter((item): item is typeof item & { product: NonNullable<typeof item.product> } => Boolean(item.product));
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const whatsappItems = cartItems.map(({ product, quantity }) => ({ product, quantity }));

  return (
    <section className="bg-ivory px-5 py-16 md:px-10 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-gold">Your selection</p>
        <h1 className="display-lg mt-6 text-espresso">YOUR BAG.</h1>
      </Reveal>

      {cartItems.length === 0 ? (
        <div className="mx-auto mt-16 max-w-md text-center">
          <ShoppingBag className="mx-auto h-10 w-10 text-stone/40" strokeWidth={1} />
          <p className="mt-6 font-sans text-sm font-light text-stone">Your bag is waiting for something beautiful.</p>
          <Link to="/shop" className="mt-8 inline-block hairline-link font-sans text-[0.62rem] uppercase tracking-[0.3em] text-espresso">
            Browse the collection
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-14 grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="divide-y divide-espresso/10 border-y border-espresso/10">
            {cartItems.map(({ product, quantity }) => (
              <article key={product.slug} className="flex gap-4 py-5 md:gap-6">
                <Link to="/product/$slug" params={{ slug: product.slug }} className="w-24 shrink-0 overflow-hidden bg-cream md:w-32">
                  <img src={product.images[0] ?? ""} alt={product.alt} className="aspect-[4/5] w-full object-cover" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <Link to="/product/$slug" params={{ slug: product.slug }}>
                      <h2 className="font-display text-xl text-espresso">{product.name}</h2>
                    </Link>
                    <p className="mt-1 font-sans text-sm font-light text-wood">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex items-center justify-between gap-5 md:justify-end">
                    <div className="flex items-center border border-espresso/15">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.slug, quantity - 1)}
                        aria-label={`Decrease ${product.name} quantity`}
                        className="p-2 text-espresso transition-colors hover:bg-cream"
                      >
                        <Minus className="h-3.5 w-3.5" strokeWidth={1.3} />
                      </button>
                      <span className="min-w-8 text-center font-sans text-sm text-espresso">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.slug, quantity + 1)}
                        aria-label={`Increase ${product.name} quantity`}
                        className="p-2 text-espresso transition-colors hover:bg-cream"
                      >
                        <Plus className="h-3.5 w-3.5" strokeWidth={1.3} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(product.slug)}
                      aria-label={`Remove ${product.name} from bag`}
                      className="p-2 text-stone transition-colors hover:text-espresso"
                    >
                      <Trash2 className="h-4 w-4" strokeWidth={1.3} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="border border-espresso/10 bg-cream p-6 md:p-8">
            <div className="flex items-center justify-between font-sans text-sm text-stone">
              <span>Subtotal</span>
              <span className="text-espresso">{formatPrice(total)}</span>
            </div>
            <p className="mt-4 font-sans text-xs font-light leading-relaxed text-stone">Shipping and final details will be confirmed with you on WhatsApp.</p>
            <a
              href={createWhatsAppCartOrderLink(whatsappItems)}
              target="_blank"
              rel="noreferrer"
              className="mt-7 flex items-center justify-center gap-2 bg-espresso px-5 py-4 text-center font-sans text-[0.62rem] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-charcoal"
            >
              Place order on WhatsApp
            </a>
          </aside>
        </div>
      )}
    </section>
  );
}
