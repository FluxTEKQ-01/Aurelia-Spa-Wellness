import Link from "next/link";
import type { Product } from "@/types/wellness";
import { currency } from "@/lib/utils";
import Image from "next/image";

export function ProductCard({ product, imageUrl }: { product: Product, imageUrl?: string }) {
  return (
    <Link href={`/shop/${product.slug}`} className="paper-card hover-lift group block overflow-hidden transition-all">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-black/40 border-b border-border/50">
        {imageUrl ? (
          <Image src={imageUrl} alt={product.name} fill className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" />
        ) : (
          <div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-center text-xs uppercase tracking-[0.2em] text-primary">
            {product.image}
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="micro-label">{currency(product.price)}</p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
      </div>
    </Link>
  );
}
