import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-5 py-20 lg:px-8">
      <p className="section-kicker">Our philosophy</p>
      <h1 className="mt-5 max-w-4xl font-serif text-6xl text-stone md:text-8xl">A spa designed like a private forest retreat.</h1>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          ["Mission", "To create restorative rituals that feel cinematic, grounded, and safe for modern nervous systems."],
          ["Sustainability", "We prioritize botanical suppliers, refill-minded rituals, durable materials, and low-waste service design."],
          ["Care", "Every visit begins with listening: skin condition, pressure preferences, aromatics, and the pace you need."],
        ].map(([title, copy]) => (
          <section key={title} className="botanical-card rounded-[2rem] p-7">
            <h2 className="font-serif text-3xl text-stone">{title}</h2>
            <p className="mt-4 leading-7 text-muted">{copy}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
