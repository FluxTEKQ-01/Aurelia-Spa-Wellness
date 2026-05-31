import Link from "next/link";

const navItems = [
  ["Sanctuary", "/about"],
  ["Rituals", "/services"],
  ["Shop", "/shop"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between px-5 md:px-16">
        <Link href="/" className="font-serif text-3xl font-semibold tracking-tight text-gold">
          Aurelia Grove
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.18em] text-muted md:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="forest-button hidden px-8 py-3 text-xs uppercase tracking-[0.18em] md:inline-flex">
          Book a Ritual
        </Link>
        <Link href="/contact" className="text-3xl text-gold md:hidden" aria-label="Open contact page">
          ≡
        </Link>
      </div>
    </header>
  );
}
