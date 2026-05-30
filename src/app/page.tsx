import Link from "next/link";
import { WellnessAssistant } from "@/components/ai/wellness-assistant";
import { ProductCard } from "@/components/cards/product-card";
import { ServiceCard } from "@/components/cards/service-card";
import { WellnessEntityGraph } from "@/components/data-visualization/wellness-entity-graph";
import { SectionHeading } from "@/components/sections/section-heading";
import { ingredients, memberships, products, services, testimonials } from "@/data";
import { localBusinessSchema } from "@/lib/schema";

export default function Home() {
  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div>
          <p className="section-kicker">Forest hidden luxury spa</p>
          <h1 className="mt-5 font-serif text-6xl font-semibold tracking-tight text-stone md:text-8xl">
            Restore where the forest gets quiet.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-muted">
            Aurelia Grove blends therapeutic touch, botanical skincare, mineral body rituals, and grounded aromatics into a premium wellness sanctuary.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/services" className="forest-button px-7 py-4 text-center">Explore treatments</Link>
            <Link href="/shop" className="rounded-full border border-border px-7 py-4 text-center text-stone transition hover:bg-foreground/10">Shop rituals</Link>
          </div>
        </div>
        <div className="botanical-card relative min-h-[520px] overflow-hidden rounded-[3rem] p-8">
          <div className="leaf-orb absolute -right-12 -top-10 h-64 w-64" />
          <div className="leaf-orb absolute bottom-10 left-8 h-36 w-36 opacity-80" />
          <div className="relative mt-44 rounded-[2rem] border border-border bg-background/45 p-7 backdrop-blur">
            <p className="section-kicker">Signature ritual</p>
            <h2 className="mt-3 font-serif text-4xl text-stone">Forest Reset Massage</h2>
            <p className="mt-4 leading-7 text-muted">Warm stones, hinoki aromatics, and intuitive pressure for deep restoration.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading kicker="Featured treatments" title="Quiet, precise rituals for body and skin" copy="Static service data powers the pages now and can migrate cleanly to a CMS later." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading kicker="Ritual shop" title="Botanical formulas for the pause after the spa" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-3 lg:px-8">
        {ingredients.slice(0, 3).map((ingredient) => (
          <div key={ingredient.id} className="botanical-card rounded-[2rem] p-6">
            <p className="section-kicker">Ingredient</p>
            <h3 className="mt-3 font-serif text-3xl text-stone">{ingredient.name}</h3>
            <p className="mt-4 leading-7 text-muted">{ingredient.usage}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading kicker="Guest notes" title="Trust built through calm details" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="botanical-card rounded-[2rem] p-6">
              <p className="text-lg leading-8 text-stone">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-5 text-sm text-gold">{testimonial.customerName} - {testimonial.rating}/5</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading kicker="Memberships" title="Seasonal restoration, scheduled before depletion" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {memberships.map((membership) => (
            <div key={membership.id} className="botanical-card rounded-[2rem] p-7">
              <p className="section-kicker">{membership.priceLabel}</p>
              <h3 className="mt-3 font-serif text-4xl text-stone">{membership.name}</h3>
              <p className="mt-4 leading-7 text-muted">{membership.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WellnessAssistant />
      <WellnessEntityGraph />
    </main>
  );
}
