import Link from "next/link";
import type { Service } from "@/types/wellness";
import { currency } from "@/lib/utils";
import { serviceImages } from "@/lib/media";
import { ImageBackdrop } from "@/components/ui/image-backdrop";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="botanical-card group block overflow-hidden rounded-[1.5rem] transition hover:border-gold/40">
      <div className="image-veil relative h-64 rounded-t-[1.5rem]">
        <ImageBackdrop src={serviceImages[service.slug] ?? serviceImages["forest-reset-massage"]} alt="Luxury spa treatment room" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Ritual</span>
            <span className="rounded-full bg-background/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-alabaster">{service.durationMinutes} mins</span>
          </div>
          <h3 className="font-serif text-3xl text-alabaster">{service.name}</h3>
        </div>
      </div>
      <div className="p-7">
        <p className="leading-7 text-muted">{service.description}</p>
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="text-sandstone">From {currency(service.priceFrom)}</span>
          <span className="text-gold transition group-hover:translate-x-1">Explore →</span>
        </div>
      </div>
    </Link>
  );
}
