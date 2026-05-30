import type { JournalArticle } from "@/types/wellness";

export const journalArticles: JournalArticle[] = [
  {
    id: "self-care-rituals",
    title: "A Quiet Guide to Evening Self-Care Rituals",
    slug: "self-care-rituals",
    excerpt: "How to design a restorative evening ritual with breath, warmth, and low-stimulation skincare.",
    category: "Self-care rituals",
    ingredientIds: ["hinoki", "sea-kelp"],
    serviceIds: ["aroma-sleep-ritual"],
    productIds: ["mineral-soak", "hinoki-body-oil"],
    body: [
      "A refined evening ritual should reduce decisions, soften the senses, and make rest feel inevitable rather than forced.",
      "Begin with warm water, a quiet aromatic cue, and slow body oil application. Keep the ritual consistent and brief enough to repeat.",
      "If sleep difficulty is persistent or disruptive, consult a qualified health professional for guidance.",
    ],
  },
  {
    id: "botanical-skincare-guide",
    title: "Botanical Skincare Without the Noise",
    slug: "botanical-skincare-guide",
    excerpt: "A calmer approach to botanical ingredients, sensitive skin, and visible glow.",
    category: "Ingredient education",
    ingredientIds: ["blue-tansy", "rose-clay"],
    serviceIds: ["botanical-facial"],
    productIds: ["blue-tansy-serum", "rose-clay-polish"],
    body: [
      "Luxury skincare is not about using more. It is about matching texture, timing, and ingredients to the skin in front of you.",
      "Blue tansy brings a calming aromatic profile, while rose clay offers a soft refining ritual when used sparingly.",
      "Patch test new products and avoid using exfoliating steps on irritated skin.",
    ],
  },
  {
    id: "forest-bathing-at-home",
    title: "Forest Bathing Cues for the Home Bathroom",
    slug: "forest-bathing-at-home",
    excerpt: "Small sensory choices that turn bathing into a grounded forest-inspired pause.",
    category: "Wellness guides",
    ingredientIds: ["hinoki"],
    serviceIds: ["forest-reset-massage"],
    productIds: ["hinoki-body-oil"],
    body: [
      "A forest-inspired bathroom ritual depends on pacing: dimmer light, lower sound, warm textiles, and one memorable botanical aroma.",
      "Use a single aromatic anchor, such as hinoki, so the body learns to associate it with slowing down.",
    ],
  },
];
