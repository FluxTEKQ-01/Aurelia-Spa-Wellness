import Link from "next/link";
import type { Product } from "@/types/wellness";
import { currency } from "@/lib/utils";
import { productImages } from "@/lib/media";
import { ImageBackdrop } from "@/components/ui/image-backdrop";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block transition hover:-translate-y-1">
      <div className="botanical-card image-veil relative aspect-[1/1.2] rounded-[1.5rem] p-3">
        <ImageBackdrop src={productImages[product.slug] ?? productImages["blue-tansy-calm-serum"]} alt={product.name} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" className="rounded-[1.1rem]" />
        <div className="absolute right-5 top-5 z-10 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] text-alabaster backdrop-blur">
          {currency(product.price)}
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-alabaster">{product.name}</h3>
          <span className="text-sandstone">{currency(product.price)}</span>
        </div>
        <p className="leading-7 text-muted">{product.description}</p>
      </div>
    </Link>
  );
}
