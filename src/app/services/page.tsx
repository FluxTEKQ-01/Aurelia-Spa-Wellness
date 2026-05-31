import Link from "next/link";
import { faqs, memberships, services } from "@/data";
import { heroImage, serviceImages } from "@/lib/media";
import { createMetadata } from "@/lib/seo";
import { currency } from "@/lib/utils";
import { ImageBackdrop } from "@/components/ui/image-backdrop";

export const metadata = createMetadata({ title: "Rituals & Treatments", path: "/services" });

export default function ServicesPage() {
  const [featured, ...rest] = services;

  return (
    <main className="relative flex-1 pt-32">
      <div className="leaf-orb fixed -left-96 -top-96 h-[800px] w-[800px]" />
      <div className="leaf-orb fixed -bottom-96 -right-96 h-[1000px] w-[1000px]" />

      <section className="relative z-10 mx-auto mb-20 grid min-h-[70vh] max-w-[1280px] items-center gap-6 px-5 md:grid-cols-12 md:px-16">
        <div className="order-2 pt-12 md:order-1 md:col-span-5 md:pt-0">
          <p className="section-kicker mb-6">Rituals & Treatments</p>
          <h1 className="font-serif text-[56px] font-semibold leading-[1.05] tracking-[-0.02em] text-alabaster md:text-8xl">A Menu of Deep Restoration.</h1>
          <p className="mt-8 max-w-md text-xl leading-8 text-muted">Aurelia Grove blends therapeutic touch, botanical skincare, mineral body rituals, and grounded aromatics for Mumbai city decompression.</p>
          <Link className="forest-button mt-12 inline-flex px-8 py-4" href="#menu">Explore Treatments</Link>
        </div>
        <div className="image-veil order-1 h-[50vh] rounded-2xl md:order-2 md:col-span-7 md:h-[80vh]">
          <ImageBackdrop src={heroImage} alt="Indoor thermal spa surrounded by botanical stone" priority sizes="(min-width: 768px) 58vw, 100vw" />
        </div>
      </section>

      <section id="menu" className="relative z-10 mx-auto mb-20 max-w-[1280px] scroll-mt-32 px-5 md:mb-32 md:px-16">
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-4xl text-alabaster md:text-6xl">Quiet, precise rituals.</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">Filter by your body&apos;s needs, or begin with our signature forest reset.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0">
            {['All', 'Massage', 'Facial', 'Body'].map((filter, index) => (
              <span key={filter} className={index === 0 ? "rounded-full border border-gold/20 bg-gold/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-gold" : "botanical-card rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted"}>{filter}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <article className="botanical-card image-veil group min-h-[420px] rounded-2xl p-8 md:col-span-7 md:p-10">
            <ImageBackdrop src={serviceImages[featured.slug]} alt={featured.name} sizes="(min-width: 768px) 58vw, 100vw" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-gold">Massage</span>
                <span className="rounded-full bg-background/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-alabaster">{featured.durationMinutes} mins</span>
              </div>
              <div className="mt-auto pt-12">
                <h3 className="font-serif text-3xl text-alabaster">{featured.name}</h3>
                <p className="mt-3 max-w-md text-lg leading-8 text-muted">{featured.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-sandstone">From {currency(featured.priceFrom)}</span>
                  <Link className="text-gold" href={`/services/${featured.slug}`}>Explore →</Link>
                </div>
              </div>
            </div>
          </article>
          {rest.map((service, index) => (
            <article key={service.id} className={index === 2 ? "botanical-card group rounded-2xl p-8 md:col-span-7 md:flex md:gap-8" : "botanical-card group rounded-2xl p-8 md:col-span-5"}>
              {index === 2 ? <div className="image-veil mb-6 h-48 rounded-xl md:mb-0 md:w-2/5"><ImageBackdrop src={serviceImages[service.slug]} alt={service.name} sizes="(min-width: 768px) 20vw, 100vw" /></div> : null}
              <div className="flex flex-1 flex-col justify-between">
                <div className="mb-12 flex items-start justify-between">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-sandstone">Ritual</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{service.durationMinutes} mins</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-alabaster">{service.name}</h3>
                  <p className="mt-3 leading-7 text-muted">{service.description}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-sandstone">From {currency(service.priceFrom)}</span>
                    <Link className="text-gold" href={`/services/${service.slug}`}>→</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-[1280px] px-5 md:mb-32 md:px-16">
        <div className="botanical-card relative overflow-hidden rounded-3xl p-8 md:p-16">
          <div className="leaf-orb absolute -right-40 -top-40 h-[500px] w-[500px]" />
          <div className="relative z-10 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="section-kicker">Memberships</p>
              <h2 className="mt-4 font-serif text-4xl text-alabaster md:text-6xl">Seasonal restoration, scheduled before depletion.</h2>
            </div>
            <div className="space-y-6 md:col-span-6 md:col-start-7">
              {memberships.map((membership) => (
                <div key={membership.id} className="rounded-2xl border border-border bg-surface-lowest/50 p-8 transition hover:border-gold/50">
                  <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
                    <h3 className="font-serif text-3xl text-alabaster">{membership.name}</h3>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-sandstone">{membership.priceLabel}</span>
                  </div>
                  <p className="leading-7 text-muted">{membership.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-4xl space-y-4 px-5 md:mb-32 md:px-16">
        {faqs.map((faq) => (
          <details key={faq.id} className="botanical-card rounded-3xl p-6">
            <summary className="cursor-pointer font-serif text-2xl text-alabaster">{faq.question}</summary>
            <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
