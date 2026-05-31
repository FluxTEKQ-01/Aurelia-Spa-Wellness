import { createMetadata } from "@/lib/seo";
import { heroImage } from "@/lib/media";
import { ImageBackdrop } from "@/components/ui/image-backdrop";

export const metadata = createMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <main className="flex-1 pt-24">
      <section className="image-veil relative mb-24 flex h-[80vh] min-h-[600px] items-end px-5 pb-20 md:px-16 md:pb-32">
        <ImageBackdrop src={heroImage} alt="Misty forest canopy at dawn" priority sizes="100vw" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          <h1 className="max-w-5xl font-serif text-[56px] font-semibold leading-[1.05] tracking-[-0.02em] text-alabaster md:text-8xl">Our Story: <br />The Soul of the Sanctuary</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-sandstone">Aurelia Grove was born from a simple realization: true restoration cannot be rushed.</p>
        </div>
      </section>
      <section className="mx-auto mb-24 grid max-w-[1280px] gap-8 px-5 md:grid-cols-12 md:px-16">
        <div className="md:sticky md:top-32 md:col-span-5 md:self-start">
          <p className="section-kicker text-sandstone">The Origin</p>
          <h2 className="mt-4 font-serif text-4xl text-gold md:text-6xl">From Noise to Stillness</h2>
        </div>
        <div className="space-y-8 md:col-span-7">
          <p className="text-xl leading-8 text-alabaster">Aurelia Grove blends therapeutic touch, botanical skincare, mineral body rituals, and grounded aromatics into a premium wellness sanctuary in Mumbai.</p>
          <div className="botanical-card rounded-2xl p-8 md:p-10">
            <p className="border-l-2 border-gold pl-6 italic leading-8 text-muted">&ldquo;It felt like stepping out of the city and into a private forest. My shoulders finally dropped.&rdquo;<span className="mt-4 block text-sm not-italic text-sandstone">— Elena R.</span></p>
          </div>
          <p className="text-lg leading-8 text-muted">We found our city anchor in Bandra West, where stone, wood, mist, and light create a sensory pause above the pace of Mumbai.</p>
        </div>
      </section>
      <section className="mx-auto mb-24 max-w-[1280px] px-5 md:px-16">
        <div className="mb-16 text-center"><p className="section-kicker text-sandstone">Our Philosophy</p><h2 className="mt-4 font-serif text-4xl text-alabaster md:text-6xl">Botanical Intelligence</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Blue Tansy", "Infused into facial oils and recovery masks for sensitive skin days."],
            ["Hinoki Cypress", "Diffused during massage and blended into bath rituals for polished forest calm."],
            ["Mineral Sea Kelp", "Used in body wraps and replenishing creams for full-body softness."],
          ].map(([title, copy], index) => (
            <section key={title} className={`botanical-card rounded-2xl p-8 md:p-10 ${index === 1 ? "md:-translate-y-8" : ""}`}>
              <h3 className="font-serif text-3xl text-gold">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{copy}</p>
            </section>
          ))}
        </div>
      </section>
      <section className="mb-24 border-y border-border bg-surface-low py-20 text-center">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <p className="mb-6 text-5xl text-gold">✦</p>
          <h2 className="font-serif text-4xl text-alabaster md:text-6xl">The Aurelia Standard</h2>
          <p className="mx-auto mt-8 max-w-4xl font-serif text-4xl italic text-gold md:text-7xl">&ldquo;Ethically Wild, Purely Botanical&rdquo;</p>
          <p className="mx-auto mt-8 max-w-2xl leading-8 text-muted">Quiet, precise rituals shaped by botanical intelligence and city sanctuary design.</p>
        </div>
      </section>
    </main>
  );
}
