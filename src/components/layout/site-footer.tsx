import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-lowest">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-20 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-16">
        <div>
          <p className="section-kicker">Botanical sanctuary</p>
          <h2 className="mt-4 max-w-sm font-serif text-4xl text-gold">Luxury wellness rituals shaped by forest calm.</h2>
        </div>
        <div className="grid gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <Link href="/services" className="hover:text-gold">Treatments</Link>
          <Link href="/shop" className="hover:text-gold">Ritual shop</Link>
          <Link href="/journal" className="hover:text-gold">Journal</Link>
          <Link href="/contact" className="hover:text-gold">Contact</Link>
        </div>
        <div className="font-mono text-xs uppercase leading-7 tracking-[0.18em] text-muted">
          <p>Bandra West, Mumbai</p>
          <p>Maharashtra, India</p>
          <p>Open Tuesday to Sunday</p>
          <p>9:00 AM - 7:00 PM</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] border-t border-border px-5 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70 md:px-16">
        © 2026 Aurelia Grove Mumbai. All rights reserved.
      </div>
    </footer>
  );
}
