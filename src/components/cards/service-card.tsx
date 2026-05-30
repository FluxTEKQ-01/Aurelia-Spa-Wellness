import Link from "next/link";
import type { Service } from "@/types/wellness";
import { currency } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="paper-card hover-lift group block p-6 transition-all">
      <p className="micro-label">{service.durationMinutes} min</p>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">{service.name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
      <div className="mt-6 flex items-center justify-between text-sm font-medium border-t border-border/50 pt-4">
        <span className="text-muted-foreground">From {currency(service.priceFrom)}</span>
        <span className="text-accent group-hover:text-primary transition-colors">INITIATE_PROTOCOL</span>
      </div>
    </Link>
  );
}
