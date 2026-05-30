import Link from "next/link";
import type { Service } from "@/types/wellness";
import { currency } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="botanical-card group block rounded-[2rem] p-6 transition hover:-translate-y-1">
      <p className="section-kicker">{service.durationMinutes} minutes</p>
      <h3 className="mt-4 font-serif text-3xl text-stone">{service.name}</h3>
      <p className="mt-4 leading-7 text-muted">{service.description}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span>From {currency(service.priceFrom)}</span>
        <span className="text-gold">Explore</span>
      </div>
    </Link>
  );
}
