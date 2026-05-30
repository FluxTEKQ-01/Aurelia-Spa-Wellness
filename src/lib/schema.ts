import type { FAQ, JournalArticle, Product, Service, Testimonial } from "@/types/wellness";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: "Aurelia Grove Spa",
    description: "Premium botanical spa and wellness rituals inspired by forest restoration.",
    priceRange: "$$$",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    offers: { "@type": "Offer", price: service.priceFrom, priceCurrency: "USD" },
  };
}

export function productSchema(product: Product, reviews: Testimonial[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: { "@type": "Offer", price: product.price, priceCurrency: "USD" },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.customerName },
      reviewBody: review.quote,
      reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(article: JournalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
  };
}
