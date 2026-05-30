import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-7xl flex-1 gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <section>
        <p className="section-kicker">Consultation request</p>
        <h1 className="mt-5 font-serif text-6xl text-stone md:text-8xl">Begin with a slower question.</h1>
        <div className="mt-10 space-y-4 text-muted">
          <p>Hours: Tuesday to Sunday, 9:00 AM - 7:00 PM</p>
          <p>Location map placeholder until the real address is known.</p>
          <p>For health concerns, please consult a licensed medical professional.</p>
        </div>
      </section>
      <form className="botanical-card space-y-5 rounded-[2rem] p-7">
        {["Name", "Email", "Preferred ritual"].map((label) => (
          <label key={label} className="block text-sm text-muted">
            <span>{label}</span>
            <input className="mt-2 w-full rounded-2xl border border-border bg-background/45 p-4 text-foreground" />
          </label>
        ))}
        <label className="block text-sm text-muted">
          <span>What would you like support with?</span>
          <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-border bg-background/45 p-4 text-foreground" />
        </label>
        <button type="button" className="forest-button px-7 py-4">Request consultation</button>
      </form>
    </main>
  );
}
