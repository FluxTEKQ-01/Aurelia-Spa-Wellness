import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/50 bg-background pt-12 pb-8">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="micro-label">Aurelia System</p>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-bold tracking-tight text-foreground">
            Tactical restoration & recovery surface.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Engineered rituals for peak cognitive and physical performance.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="hover:text-primary transition-colors">Modules</Link>
          <Link href="/shop" className="hover:text-primary transition-colors">Inventory</Link>
          <Link href="/journal" className="hover:text-primary transition-colors">System Logs</Link>
        </div>
        <div className="text-sm font-mono text-muted-foreground">
          <p className="text-primary mb-2">STATUS: ONLINE</p>
          <p>TUE-SUN [0900 - 1900]</p>
          <p>LOC: // PENDING_DECRYPTION</p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border/20 text-xs font-mono text-muted-foreground flex justify-between">
        <p>AURELIA_GROVE v2.0.4</p>
        <p>SYSTEM OPTIMIZED</p>
      </div>
    </footer>
  );
}
