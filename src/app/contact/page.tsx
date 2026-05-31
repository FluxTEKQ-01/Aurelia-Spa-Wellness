import { createMetadata } from "@/lib/seo";
import { sanctuaryImage } from "@/lib/media";
import { ImageBackdrop } from "@/components/ui/image-backdrop";

export const metadata = createMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1280px] flex-1 px-5 pb-24 pt-40 md:px-16">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className="section-kicker text-sandstone">Reach out</p>
        <h1 className="mt-4 font-serif text-[56px] leading-[1.05] text-gold md:text-8xl">Begin Your Retreat</h1>
        <p className="mt-6 text-xl leading-8 text-muted">Connect with our guides to tailor your upcoming visit to the sanctuary.</p>
      </div>
      <div className="grid gap-12 lg:grid-cols-12">
        <section className="space-y-8 lg:col-span-7">
          <div className="image-veil aspect-[4/3] rounded-3xl">
            <ImageBackdrop src={sanctuaryImage} alt="Aurelia Grove reception sanctuary" sizes="(min-width: 1024px) 58vw, 100vw" priority />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="botanical-card rounded-2xl p-8"><p className="text-3xl text-gold">⌖</p><h3 className="mt-4 font-serif text-2xl text-gold">Sanctuary Grounds</h3><p className="mt-3 text-muted">Bandra West, Mumbai, Maharashtra</p><p className="mt-4 text-sm text-muted/70">Exact suite details shared upon booking confirmation.</p></div>
            <div className="botanical-card rounded-2xl p-8"><p className="text-3xl text-gold">◷</p><h3 className="mt-4 font-serif text-2xl text-gold">Hours of Stillness</h3><p className="mt-3 text-muted">Tuesday to Sunday</p><p className="font-medium text-muted">9:00 AM - 7:00 PM IST</p></div>
          </div>
        </section>
        <form className="botanical-card space-y-6 rounded-[2rem] p-8 md:p-10 lg:col-span-5">
          <h2 className="font-serif text-3xl text-gold">Send an Inquiry</h2>
          {["Guest Name", "Email Address"].map((label) => (
            <label key={label} className="block font-mono text-xs uppercase tracking-[0.2em] text-sandstone">
              <span>{label}</span>
              <input className="mt-2 w-full rounded-3xl border border-border bg-background/50 px-6 py-4 font-sans text-base normal-case tracking-normal text-foreground transition focus:border-gold focus:ring-1 focus:ring-gold/50" />
            </label>
          ))}
          <label className="block font-mono text-xs uppercase tracking-[0.2em] text-sandstone">
            <span>Primary Interest</span>
            <select className="mt-2 w-full rounded-3xl border border-border bg-background/50 px-6 py-4 font-sans text-base normal-case tracking-normal text-foreground transition focus:border-gold focus:ring-1 focus:ring-gold/50">
              <option>Private Retreat</option><option>Guided Ritual</option><option>Small Group Gathering</option><option>General Inquiry</option>
            </select>
          </label>
          <label className="block font-mono text-xs uppercase tracking-[0.2em] text-sandstone">
            <span>Your Intentions</span>
            <textarea className="mt-2 min-h-36 w-full resize-none rounded-3xl border border-border bg-background/50 px-6 py-4 font-sans text-base normal-case tracking-normal text-foreground transition focus:border-gold focus:ring-1 focus:ring-gold/50" />
          </label>
          <button type="button" className="forest-button w-full px-7 py-4">Submit Inquiry</button>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone/70">We typically respond within 24 hours.</p>
        </form>
      </div>
    </main>
  );
}
