import { ProductCard } from "@/components/cards/product-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { productCategories, products } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Shop", path: "/shop" });

export default function ShopPage() {
  return (
    <div className="flex-1 pb-20">
      <SectionHeading kicker="Inventory" title="Benefit-led formulations" copy="A curated selection of botanical compounds and elements engineered for physiological restoration." />
      
      <div className="flex flex-wrap gap-3 mb-12">
        <span className="micro-label bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 cursor-pointer">ALL_ITEMS</span>
        {productCategories.map((category) => (
          <span key={category.id} className="micro-label text-muted-foreground px-4 py-2 rounded-full border border-border hover:bg-white/5 transition-colors cursor-pointer">
            {category.name}
          </span>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
