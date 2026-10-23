import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Frost Lab",
  tagline: "Custom cakes made with love in Brampton. Freshly baked and 100% eggless.",
  category: "Eggless custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://thefrost-lab.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#7A5238" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "100% eggless cakes in Brampton",
    headline: "Sweet moments start here",
    subhead: "Custom cakes, freshly baked and handmade with love. Send us a DM with your date and design idea to get started.",
    images: [
      { src: "/images/cake-4.jpg", alt: "Pink vintage cake with piped ruffles by The Frost Lab" },
      { src: "/images/cake-2.jpg", alt: "Bunny cake with pink rosettes" },
      { src: "/images/cake-3.jpg", alt: "Heart shaped cake wrapped in piped roses" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["100% eggless", "Freshly baked", "Custom cakes", "Orders by Instagram DM"],

  about: {
    title: "A little luxury in every bite",
    body: [
      "The Frost Lab is a new cake shop in Brampton making custom cakes for your happiest moments. Everything is 100% eggless and handmade with love.",
      "Chocolate lovers, fruity favourites, and desi inspired delights: tell us what you are celebrating and we will design a cake around it.",
    ],
    image: { src: "/images/cake-5.jpg", alt: "The Frost Lab artisan eggless cakes" },
  },

  menu: {
    title: "Flavours we love",
    intro: "Every cake is made to order. Send a DM for details and a quote.",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Cake styles",
        items: [
          { name: "Chocolate", description: "For the chocolate lovers." },
          { name: "Fruity", description: "Fruity favourites, too." },
          { name: "Desi inspired", description: "Desi inspired delights." },
        ],
      },
    ],
  },

  gallery: {
    title: "Our creations",
    items: [
      { src: "/images/cake-4.jpg", width: 1400, height: 1400, alt: "Pink vintage cake", caption: "Vintage cake", href: "https://www.instagram.com/p/Deey5A9Ec4Z/" },
      { src: "/images/cake-2.jpg", width: 900, height: 1600, alt: "Bunny cake", caption: "Top forward bunny cake", href: "https://www.instagram.com/reel/DerlaBfRhhq/" },
      { src: "/images/cake-3.jpg", width: 720, height: 1280, alt: "Heart rose cake", caption: "Heart full of roses", href: "https://www.instagram.com/reel/DekSEj8Spir/" },
    ],
  },

  instagram: {
    handle: "thefrost.lab",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi The Frost Lab! I would love to order a custom eggless cake.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Are your cakes eggless?", a: "Yes. Everything we make is 100% eggless and freshly baked." },
    { q: "How do I order?", a: "Send us a DM on Instagram with your date, size, flavour, and design idea, and we will reply in the chat." },
    { q: "Where are you located?", a: "We are in Brampton, Ontario." },
  ],

  contact: {
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "The Frost Lab | Eggless custom cakes in Brampton",
    description: "The Frost Lab makes freshly baked, 100% eggless custom cakes in Brampton, Ontario. Chocolate, fruity, and desi inspired. Order by Instagram DM.",
    keywords: ["eggless cakes Brampton", "custom cakes Brampton", "eggless birthday cake Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
