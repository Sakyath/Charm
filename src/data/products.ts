export const CURRENCY = "₹";

export const formatPrice = (value: number) => `${CURRENCY}${value.toLocaleString("en-IN")}`;

export const BASE_BRACELET_PRICE = 349;

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: "Bracelets" | "Charms" | "Sets" | "Gifting";
  collection: "Everyday" | "Keepsake" | "Signature";
  story: string;
  details: string[];
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    slug: "butterfly-charm-bracelet",
    name: "Butterfly Charm Bracelet",
    tagline: "For the girl who keeps becoming",
    price: 649,
    image: "/images/products/butterfly.jpg",
    category: "Bracelets",
    collection: "Signature",
    story:
      "A single butterfly, caught mid-flight on a hand-knotted band. Made for the seasons where you are changing quietly and beautifully.",
    details: ["Hand-assembled charm bracelet", "Adjustable knotted closure", "Fits most wrists", "Arrives gift-wrapped"],
    bestseller: true,
  },
  {
    slug: "love-letter-bracelet",
    name: "Love Letter Bracelet",
    tagline: "Say it without saying it",
    price: 699,
    image: "/images/products/love-letter.jpg",
    category: "Bracelets",
    collection: "Keepsake",
    story:
      "A tiny envelope charm that holds everything you never managed to write down. Our most gifted piece between best friends.",
    details: ["Envelope charm with beaded accents", "Adjustable sizing", "Handmade to order", "Gift note on request"],
    bestseller: true,
  },
  {
    slug: "paris-story-bracelet",
    name: "Paris Story Bracelet",
    tagline: "A city you haven't been to yet",
    price: 749,
    image: "/images/products/paris-story.jpg",
    category: "Bracelets",
    collection: "Signature",
    story:
      "Little charms strung together like postcards — for the trip you're saving up for and the version of you who takes it.",
    details: ["Multi-charm arrangement", "Hand-knotted band", "Adjustable", "Made in small batches"],
  },
  {
    slug: "lucky-key-bracelet",
    name: "Lucky Key Bracelet",
    tagline: "Something to hold on to",
    price: 599,
    image: "/images/products/lucky-key.jpg",
    category: "Bracelets",
    collection: "Everyday",
    story: "A small key charm, worn daily until it becomes yours. For new beginnings, new homes, new courage.",
    details: ["Key charm", "Everyday-wear finish", "Adjustable closure", "Handmade"],
  },
  {
    slug: "classic-charm-stack",
    name: "Classic Charm Stack",
    tagline: "Three bands, one story",
    price: 1149,
    image: "/images/products/classic-stack.jpg",
    category: "Sets",
    collection: "Signature",
    story:
      "A curated stack made to be layered — one for who you were, one for who you are, one for who you're becoming.",
    details: ["Set of three bracelets", "Mixed charm arrangement", "Adjustable", "Presented in a gift box"],
    bestseller: true,
  },
  {
    slug: "personal-story-bracelet",
    name: "Personal Story Bracelet",
    tagline: "Built charm by charm",
    price: 799,
    image: "/images/products/personal-story.jpg",
    category: "Bracelets",
    collection: "Keepsake",
    story:
      "You choose the charms, we hand-assemble the piece. The most personal thing we make, because none of them repeat.",
    details: ["Choose your charms", "Hand-assembled to order", "Adjustable", "Made in 2–4 days"],
  },
  {
    slug: "connected-hearts-set",
    name: "Connected Hearts Set",
    tagline: "One for you, one for her",
    price: 999,
    image: "/images/products/connected-hearts.jpg",
    category: "Sets",
    collection: "Keepsake",
    story: "A pair of bracelets meant to be split — sisters, best friends, mothers and daughters, long-distance people.",
    details: ["Set of two matching bracelets", "Heart charms", "Adjustable", "Two gift pouches included"],
  },
  {
    slug: "memory-collection-bracelet",
    name: "Memory Collection Bracelet",
    tagline: "Little charms, big memories",
    price: 849,
    image: "/images/products/memory-collection.jpg",
    category: "Bracelets",
    collection: "Keepsake",
    story: "Layered charms collected the way memories are — slowly, and without a plan.",
    details: ["Multiple charms", "Hand-knotted", "Adjustable", "Gift-wrapped"],
  },
  {
    slug: "silver-charm-bracelet",
    name: "Silver Charm Bracelet",
    tagline: "Quiet, and never plain",
    price: 679,
    image: "/images/products/silver-charm.jpg",
    category: "Bracelets",
    collection: "Everyday",
    story: "A cooler-toned piece for people who wear their jewellery every single day and forget it's there.",
    details: ["Silver-tone charms", "Everyday finish", "Adjustable", "Handmade"],
  },
  {
    slug: "star-beaded-bracelet",
    name: "Star Beaded Bracelet",
    tagline: "For the ones who wish out loud",
    price: 549,
    image: "/images/products/star-beaded.jpg",
    category: "Charms",
    collection: "Everyday",
    story: "Tiny beads and a single star — the easiest piece to gift, and the hardest to take off.",
    details: ["Beaded band with star charm", "Lightweight", "Adjustable", "Handmade to order"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const categoryFilters = ["All", "Bracelets", "Charms", "Sets", "Gifting"] as const;
export const collectionFilters = ["All", "Everyday", "Keepsake", "Signature"] as const;

export const charmOptions = [
  { id: "butterfly", label: "Butterfly", meaning: "Change & becoming", price: 90 },
  { id: "heart", label: "Heart", meaning: "The people you keep", price: 80 },
  { id: "letter", label: "Initial letter", meaning: "A name you love", price: 110 },
  { id: "star", label: "Star", meaning: "A wish in progress", price: 80 },
  { id: "key", label: "Key", meaning: "New beginnings", price: 95 },
  { id: "envelope", label: "Love letter", meaning: "Words unsaid", price: 120 },
  { id: "flower", label: "Flower", meaning: "Softness as strength", price: 85 },
  { id: "moon", label: "Moon", meaning: "Late-night talks", price: 90 },
  { id: "pearl", label: "Pearl bead", meaning: "Everyday elegance", price: 60 },
];

export const testimonials = [
  {
    quote:
      "I gifted the Love Letter bracelet to my sister and she cried. It felt like it was made only for her — because it was.",
    author: "Aditi",
    city: "Hyderabad",
  },
  {
    quote: "Wore mine every day for four months. Still looks like the day it arrived, still gets compliments.",
    author: "Sneha",
    city: "Bengaluru",
  },
  {
    quote: "The customisation chat over WhatsApp felt like talking to a friend, not a shop.",
    author: "Ritika",
    city: "Pune",
  },
];

export const giftCategories = [
  {
    title: "For your best friend",
    description: "The one who knows the whole story. Pairs and matching charms.",
    image: "/images/editorial/gifting.jpg",
  },
  {
    title: "For her birthday",
    description: "A piece that holds the year she's stepping into.",
    image: "/images/editorial/worn.jpg",
  },
  {
    title: "Just because",
    description: "No occasion needed. Small, wrapped, and hand-delivered by post.",
    image: "/images/editorial/story.jpg",
  },
];

export const journalEntries = [
  {
    slug: "how-to-build-a-charm-story",
    title: "How to build a charm story",
    excerpt: "Start with one charm that means something. The rest will find their way to the band.",
    image: "/images/editorial/atelier.jpg",
    readTime: "3 min read",
  },
  {
    slug: "caring-for-handmade-charms",
    title: "Caring for handmade charms",
    excerpt: "Keep them dry, keep them close, and let them collect a little history.",
    image: "/images/editorial/worn.jpg",
    readTime: "2 min read",
  },
  {
    slug: "the-gift-that-isnt-generic",
    title: "The gift that isn't generic",
    excerpt: "Why a bracelet chosen charm by charm outlasts anything bought in a hurry.",
    image: "/images/editorial/gifting.jpg",
    readTime: "4 min read",
  },
];
