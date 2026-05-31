import { notFound } from "next/navigation";
import { ServiceCard } from "@/components/cards/service-card";
import { ingredients, products, services, testimonials } from "@/data";
import { productImages } from "@/lib/media";
import { ImageBackdrop } from "@/components/ui/image-backdrop";
import { productSchema } from "@/lib/schema";
import { currency } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const productIngredients = ingredients.filter((ingredient) => product.ingredientIds.includes(ingredient.id));
  const relatedServices = services.filter((service) => product.relatedServiceIds.includes(service.id));
  const reviews = testimonials.filter((testimonial) => product.reviewIds.includes(testimonial.id));

  return (
    <main className="mx-auto max-w-[1280px] flex-1 px-5 pb-24 pt-40 md:px-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product, reviews)) }} />
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="botanical-card image-veil min-h-[560px] rounded-[3rem] p-3">
          <ImageBackdrop src={productImages[product.slug] ?? productImages["blue-tansy-calm-serum"]} alt={product.name} sizes="(min-width: 768px) 45vw, 100vw" priority className="rounded-[2.5rem]" />
        </div>
        <div>
          <p className="section-kicker">{currency(product.price)}</p>
          <h1 className="mt-5 font-serif text-[56px] leading-[1.05] text-alabaster md:text-8xl">{product.name}</h1>
          <p className="mt-8 text-xl leading-9 text-muted">{product.description}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <section className="botanical-card rounded-[2rem] p-6">
              <h2 className="font-serif text-3xl text-alabaster">Benefits</h2>
              <ul className="mt-5 space-y-3 text-muted">{product.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </section>
            <section className="botanical-card rounded-[2rem] p-6">
              <h2 className="font-serif text-3xl text-alabaster">Ingredients</h2>
              <ul className="mt-5 space-y-3 text-muted">{productIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)}</ul>
            </section>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{relatedServices.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
    </main>
  );
}
