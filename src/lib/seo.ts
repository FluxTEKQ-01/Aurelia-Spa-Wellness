import type { Metadata } from "next";

const siteName = "Aurelia Grove Spa";
const baseDescription = "A premium botanical spa and wellness destination for restorative treatments, ritual skincare, and quiet luxury.";

export function createMetadata({
  title,
  description = baseDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Botanical Spa & Wellness`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      siteName,
    },
  };
}
