import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <div className="flex-1 pb-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-accent" />
        <p className="micro-label text-accent">System Philosophy</p>
      </div>
      <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-16 max-w-4xl">
        Engineered like a tactical planning surface for physiological recovery.
      </h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Objective", "To deploy restorative protocols that feel precise, grounded, and structurally sound for modern neural loads."],
          ["Architecture", "We prioritize bio-compatible suppliers, refill-optimized systems, durable tactile materials, and low-friction service deployment."],
          ["Diagnostics", "Every session initiates with data collection: current load, pressure metrics, aromatic compatibility, and required recovery pacing."],
        ].map(([title, copy]) => (
          <section key={title} className="glass-panel p-8 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:animate-pulse" />
              <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
