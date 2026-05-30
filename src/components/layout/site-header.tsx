import Link from "next/link";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Shop", "/shop"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-stone">
          Aurelia Grove
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="forest-button px-5 py-2 text-sm">
          Book a Ritual
        </Link>
      </div>
    </header>
  );
}
