import { ProductCard } from "@/components/cards/product-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { productCategories, products } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Shop", path: "/shop" });

export default function ShopPage() {
  return (
    <main className="flex-1 px-5 py-20 lg:px-8">
      <SectionHeading kicker="Ritual shop" title="Benefit-led botanical products" copy="A compact static catalog for skincare, body care, and aromatic rituals." />
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-center gap-3">
        {productCategories.map((category) => <span key={category.id} className="rounded-full border border-border px-4 py-2 text-sm text-muted">{category.name}</span>)}
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
