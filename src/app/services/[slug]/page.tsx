import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards/product-card";
import { faqs, ingredients, products, services } from "@/data";
import { currency } from "@/lib/utils";
import { serviceSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const serviceFaqs = faqs.filter((faq) => service.faqIds.includes(faq.id));
  const serviceIngredients = ingredients.filter((ingredient) => service.ingredientIds.includes(ingredient.id));
  const relatedProducts = products.filter((product) => service.relatedProductIds.includes(product.id));

  return (
    <main className="mx-auto max-w-7xl flex-1 px-5 py-20 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema(service), faqSchema(serviceFaqs)]) }} />
      <p className="section-kicker">{service.durationMinutes} minutes - from {currency(service.priceFrom)}</p>
      <h1 className="mt-5 max-w-4xl font-serif text-6xl text-stone md:text-8xl">{service.name}</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">{service.description}</p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <section className="botanical-card rounded-[2rem] p-7">
          <h2 className="font-serif text-3xl text-stone">Benefits</h2>
          <ul className="mt-5 space-y-3 text-muted">{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </section>
        <section className="botanical-card rounded-[2rem] p-7">
          <h2 className="font-serif text-3xl text-stone">Botanicals</h2>
          <ul className="mt-5 space-y-3 text-muted">{serviceIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)}</ul>
        </section>
        <section className="botanical-card rounded-[2rem] p-7">
          <h2 className="font-serif text-3xl text-stone">Reserve</h2>
          <p className="mt-5 leading-7 text-muted">Request a consultation and we will tailor pressure, aromatics, and pace to your preferences.</p>
        </section>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">{relatedProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </main>
  );
}
