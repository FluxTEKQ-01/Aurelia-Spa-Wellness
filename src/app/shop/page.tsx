import { ProductCard } from "@/components/cards/product-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { productCategories, products } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Shop", path: "/shop" });

export default function ShopPage() {
  return (
    <main className="flex-1 pt-32">
      <section className="mx-auto max-w-[1280px] px-5 py-20 text-center md:px-16">
        <SectionHeading kicker="Botanical essentials" title="Ritual Shop" copy="Each formula is slow-batched for Mumbai humidity, city stress, and after-spa quiet." />
      </section>
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-3 px-5 md:px-16">
        {productCategories.map((category) => <span key={category.id} className="rounded-full border border-border px-4 py-2 text-sm text-muted">{category.name}</span>)}
      </div>
      <div className="mx-auto mt-16 grid max-w-[1280px] gap-12 px-5 pb-24 md:grid-cols-3 md:px-16">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <section className="bg-surface-lowest py-24">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-5 lg:grid-cols-12 md:px-16">
          <div className="space-y-8 lg:col-span-5">
            <p className="section-kicker text-sandstone">The potency of silence</p>
            <h2 className="font-serif text-4xl text-alabaster md:text-6xl">Ingredient Spotlight</h2>
            <p className="text-xl italic leading-8 text-muted">A deep dive into the intelligence of our botanicals.</p>
          </div>
          <div className="grid gap-6 lg:col-span-7">
            {["Blue Tansy", "Hinoki Cypress"].map((name) => (
              <div key={name} className="botanical-card rounded-3xl p-8">
                <h3 className="font-serif text-3xl text-gold">{name}</h3>
                <p className="mt-4 leading-7 text-muted">Selected for visible calm, aromatic grounding, and slow-living self-care rituals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
