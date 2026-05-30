import Link from "next/link";
import type { Product } from "@/types/wellness";
import { currency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="botanical-card group block overflow-hidden rounded-[2rem] transition hover:-translate-y-1">
      <div className="flex aspect-[4/3] items-center justify-center bg-moss/20 p-8">
        <div className="leaf-orb flex h-40 w-40 items-center justify-center p-6 text-center text-xs uppercase tracking-[0.2em] text-stone">
          {product.image}
        </div>
      </div>
      <div className="p-6">
        <p className="section-kicker">{currency(product.price)}</p>
        <h3 className="mt-3 font-serif text-3xl text-stone">{product.name}</h3>
        <p className="mt-4 leading-7 text-muted">{product.description}</p>
      </div>
    </Link>
  );
}
