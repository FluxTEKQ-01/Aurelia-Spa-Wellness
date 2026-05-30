import type { Ingredient } from "@/types/wellness";

export const ingredients: Ingredient[] = [
  {
    id: "blue-tansy",
    name: "Blue Tansy",
    slug: "blue-tansy",
    origin: "Mediterranean botanical harvests",
    benefits: ["Calms visible redness", "Supports a balanced-looking complexion"],
    scientificSupport: "Known for chamazulene-rich aromatic compounds used in calming skincare rituals.",
    usage: "Infused into facial oils and recovery masks for sensitive skin days.",
  },
  {
    id: "hinoki",
    name: "Hinoki Cypress",
    slug: "hinoki-cypress",
    origin: "Japanese forest bathing traditions",
    benefits: ["Grounding aroma", "Creates a restorative spa atmosphere"],
    usage: "Diffused during massage and blended into bath rituals.",
  },
  {
    id: "sea-kelp",
    name: "Mineral Sea Kelp",
    slug: "mineral-sea-kelp",
    origin: "Cold Atlantic waters",
    benefits: ["Mineral-rich hydration", "Softens and replenishes skin"],
    usage: "Used in body wraps and replenishing creams.",
  },
  {
    id: "rose-clay",
    name: "Rose Clay",
    slug: "rose-clay",
    origin: "French clay beds",
    benefits: ["Gentle refinement", "Velvety skin finish"],
    usage: "Blended into facial polish and body mask treatments.",
  },
];
