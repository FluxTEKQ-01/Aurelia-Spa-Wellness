export type ServiceCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Service = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  durationMinutes: number;
  priceFrom: number;
  ingredientIds: string[];
  faqIds: string[];
  relatedProductIds: string[];
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  price: number;
  image: string;
  ingredientIds: string[];
  relatedServiceIds: string[];
  reviewIds: string[];
};

export type Ingredient = {
  id: string;
  name: string;
  slug: string;
  origin: string;
  benefits: string[];
  scientificSupport?: string;
  usage: string;
};

export type Testimonial = {
  id: string;
  customerName: string;
  quote: string;
  rating: number;
  serviceId?: string;
  productId?: string;
  image?: string;
};

export type JournalArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  ingredientIds?: string[];
  serviceIds?: string[];
  productIds?: string[];
  body: string[];
};

export type Membership = {
  id: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  priceLabel: string;
  serviceIds: string[];
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
