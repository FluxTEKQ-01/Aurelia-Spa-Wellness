import Link from "next/link";
import { WellnessAssistant } from "@/components/ai/wellness-assistant";
import { ProductCard } from "@/components/cards/product-card";
import { ServiceCard } from "@/components/cards/service-card";
import { WellnessEntityGraph } from "@/components/data-visualization/wellness-entity-graph";
import { SectionHeading } from "@/components/sections/section-heading";
import { ImageBackdrop } from "@/components/ui/image-backdrop";
import { ingredients, memberships, products, services, testimonials } from "@/data";
import { heroImage, serviceImages } from "@/lib/media";
import { localBusinessSchema } from "@/lib/schema";
import { currency } from "@/lib/utils";

export default function Home() {
  const signature = services[0];

  return (
    <main className="flex-1 pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden">
        <ImageBackdrop src={heroImage} alt="A misty forest spa sanctuary" priority sizes="100vw" className="brightness-[0.58]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="section-kicker mb-6">Forest hidden luxury spa · Mumbai</p>
          <h1 className="font-serif text-[56px] font-semibold leading-[1.05] tracking-[-0.02em] text-alabaster md:text-8xl">
            Restore where the forest gets quiet.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-muted">
            Aurelia Grove blends therapeutic touch, botanical skincare, mineral body rituals, and grounded aromatics into a premium wellness sanctuary in Bandra West.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
            <Link href="/services" className="forest-button w-full px-10 py-4 text-center text-lg md:w-auto">Explore treatments</Link>
            <Link href="/shop" className="botanical-card w-full rounded-full px-10 py-4 text-center text-lg font-bold text-alabaster transition hover:bg-alabaster/10 md:w-auto">Shop rituals</Link>
          </div>
        </div>
      </section>

      <section className="slow-section relative mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="leaf-orb absolute -left-72 top-0 h-[600px] w-[600px]" />
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="relative z-10 md:col-span-5">
            <p className="section-kicker">Signature ritual</p>
            <h2 className="mt-4 font-serif text-4xl text-alabaster md:text-5xl">{signature.name}</h2>
            <p className="mt-6 text-xl leading-8 text-muted">{signature.description}</p>
            <div className="my-10 flex items-center gap-8">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone">Duration</p><p>{signature.durationMinutes} Minutes</p></div>
              <div className="h-10 w-px bg-border" />
              <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone">Investment</p><p>From {currency(signature.priceFrom)}</p></div>
            </div>
            <Link href={`/services/${signature.slug}`} className="font-bold text-gold transition hover:tracking-wide">Reserve this experience →</Link>
          </div>
          <div className="relative md:col-span-7">
            <div className="botanical-card image-veil aspect-[4/5] rounded-[1.5rem] p-4">
              <ImageBackdrop src={serviceImages[signature.slug]} alt={signature.name} sizes="(min-width: 768px) 58vw, 100vw" className="rounded-2xl grayscale-[0.2]" />
            </div>
            <div className="botanical-card absolute -bottom-10 -left-10 hidden max-w-xs rounded-2xl p-8 lg:block">
              <p className="mb-4 text-4xl text-gold">✦</p>
              <p className="italic leading-7 text-muted">The hinoki aroma immediately transports you to a private forest above the city.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="slow-section bg-surface-lowest">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <SectionHeading kicker="Featured treatments" title="Quiet, precise rituals for body and skin" />
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {services.slice(1).map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      <section className="slow-section mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="section-kicker">Ritual shop</p>
            <h2 className="mt-4 font-serif text-4xl text-alabaster md:text-5xl">Botanical formulas for the pause after the spa</h2>
          </div>
          <Link href="/shop" className="font-mono text-xs uppercase tracking-[0.2em] text-gold">View full collection →</Link>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="slow-section relative overflow-hidden">
        <div className="leaf-orb absolute -bottom-32 -right-32 h-[600px] w-[600px]" />
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <p className="section-kicker mb-10 text-center">Guest notes</p>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <blockquote key={testimonial.id} className="botanical-card rounded-3xl p-10 md:p-12">
                <div className="mb-6 text-gold">★★★★★</div>
                <p className="font-serif text-3xl italic leading-tight text-alabaster">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-sandstone">— {testimonial.customerName}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="slow-section mx-auto grid max-w-[1280px] gap-6 px-5 lg:grid-cols-2 md:px-16">
        <div className="rounded-[40px] border border-gold/10 bg-forest p-10 md:p-12">
          <p className="section-kicker">Seasonal memberships</p>
          <h3 className="mt-4 font-serif text-4xl text-alabaster md:text-5xl">Scheduled restoration before depletion</h3>
          <p className="mt-8 text-xl leading-8 text-muted">Join our Mumbai sanctuary for steady restoration across humid city seasons.</p>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone">Starting from</p><p className="font-serif text-3xl text-alabaster">{memberships[0].priceLabel}</p></div>
            <Link href="/contact" className="forest-button px-8 py-3 text-center">Join Sanctuary</Link>
          </div>
        </div>
        <WellnessAssistant />
      </section>

      <section className="slow-section mx-auto grid max-w-[1280px] gap-6 px-5 md:grid-cols-3 md:px-16">
        {ingredients.slice(0, 3).map((ingredient) => (
          <div key={ingredient.id} className="botanical-card rounded-[1.5rem] p-8 md:p-10">
            <p className="section-kicker">Ingredient</p>
            <h3 className="mt-4 font-serif text-3xl text-gold">{ingredient.name}</h3>
            <p className="mt-5 leading-7 text-muted">{ingredient.usage}</p>
          </div>
        ))}
      </section>

      <WellnessEntityGraph />
    </main>
  );
}
