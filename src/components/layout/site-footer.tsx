import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/72">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="section-kicker">Botanical sanctuary</p>
          <h2 className="mt-3 max-w-sm font-serif text-3xl text-stone">Luxury wellness rituals shaped by forest calm.</h2>
        </div>
        <div className="grid gap-2 text-sm text-muted">
          <Link href="/services">Treatments</Link>
          <Link href="/shop">Ritual shop</Link>
          <Link href="/journal">Journal</Link>
        </div>
        <div className="text-sm leading-7 text-muted">
          <p>Open Tuesday to Sunday</p>
          <p>9:00 AM - 7:00 PM</p>
          <p>Location details coming soon</p>
        </div>
      </div>
    </footer>
  );
}
