import type { Membership } from "@/types/wellness";

export const memberships: Membership[] = [
  {
    id: "monthly-sanctuary",
    name: "Monthly Sanctuary",
    slug: "monthly-sanctuary",
    description: "A recurring ritual for guests who want steady restoration across seasons.",
    benefits: ["One 60-minute treatment monthly", "Priority appointment windows", "10% product ritual savings"],
    priceLabel: "From ₹5,400 monthly",
    serviceIds: ["botanical-facial", "forest-reset-massage"],
  },
  {
    id: "seasonal-retreat",
    name: "Seasonal Retreat",
    slug: "seasonal-retreat",
    description: "A deeper quarterly experience built around skin, body, and aromatic renewal.",
    benefits: ["One 120-minute seasonal visit", "Custom take-home ritual", "Complimentary tea consultation"],
    priceLabel: "₹13,500 quarterly",
    serviceIds: ["mineral-body-wrap", "aroma-sleep-ritual"],
  },
];
