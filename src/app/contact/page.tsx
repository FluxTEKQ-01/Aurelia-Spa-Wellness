import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] pb-20">
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-primary" />
          <p className="micro-label text-primary">Protocol Initialization</p>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-8">
          Request system access.
        </h1>
        <div className="space-y-6 text-muted-foreground bg-black/20 p-6 rounded-2xl border border-border/50 font-mono text-sm">
          <p className="flex justify-between"><span className="text-primary">UPTIME:</span> TUE-SUN [0900 - 1900]</p>
          <p className="flex justify-between"><span className="text-primary">COORDS:</span> // PENDING_DECRYPTION</p>
          <p className="flex justify-between text-xs text-muted"><span className="text-destructive">WARNING:</span> FOR MEDICAL EMERGENCIES, CONSULT LICENSED PERSONNEL.</p>
        </div>
      </section>
      
      <form className="glass-panel space-y-6 p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <h2 className="font-display text-2xl font-bold text-foreground">Communication Link</h2>
        </div>
        {["Operator Name", "Return Channel (Email)", "Requested Module"].map((label) => (
          <label key={label} className="block text-sm font-medium text-muted-foreground">
            <span className="micro-label mb-2 block">{label}</span>
            <input className="w-full rounded-xl border border-border bg-black/40 p-4 text-foreground shadow-inner focus:outline-none focus:ring-[3px] focus:ring-ring/50 transition-all" />
          </label>
        ))}
        <label className="block text-sm font-medium text-muted-foreground">
          <span className="micro-label mb-2 block">Diagnostic Notes</span>
          <textarea className="min-h-36 w-full rounded-xl border border-border bg-black/40 p-4 text-foreground shadow-inner focus:outline-none focus:ring-[3px] focus:ring-ring/50 transition-all resize-y" />
        </label>
        <button type="button" className="command-strip w-full py-4 rounded-xl font-bold hover-lift">
          TRANSMIT_REQUEST
        </button>
      </form>
    </div>
  );
}
