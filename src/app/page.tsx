import Link from "next/link";
import Image from "next/image";
import { WellnessAssistant } from "@/components/ai/wellness-assistant";
import { ProductCard } from "@/components/cards/product-card";
import { ServiceCard } from "@/components/cards/service-card";
import { WellnessEntityGraph } from "@/components/data-visualization/wellness-entity-graph";
import { SectionHeading } from "@/components/sections/section-heading";
import { ingredients, memberships, products, services, testimonials } from "@/data";
import { localBusinessSchema } from "@/lib/schema";

export default function Home() {
  return (
    <div className="flex-1 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      
      {/* Hero Section */}
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] mb-24">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <p className="micro-label">System Initialization</p>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-8">
            Tactical restoration.<br />Precision recovery.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground mb-12">
            Aurelia Grove engineers therapeutic touch, botanical protocols, and mineral body rituals into a high-performance wellness sanctuary. Designed for optimal human operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="command-strip hover-lift px-8 py-4 rounded-xl text-center font-bold">
              INITIALIZE_PROTOCOL
            </Link>
            <Link href="/shop" className="paper-card hover-lift px-8 py-4 rounded-xl text-center font-bold text-muted-foreground hover:text-foreground">
              ACCESS_INVENTORY
            </Link>
          </div>
        </div>
        
        {/* Signature Ritual Visualizer */}
        <div className="glass-panel relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto group">
          <Image 
            src="/images/signature.png" 
            alt="Forest Reset Massage Protocol" 
            fill 
            className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="micro-label text-accent">Signature Protocol</p>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Forest Reset Sequence</h2>
            <p className="text-muted-foreground max-w-sm">
              Warm stones, hinoki aromatics, and targeted pressure. Engineered for deep neural restoration.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-32">
        {/* Services / Treatments */}
        <section>
          <SectionHeading kicker="Active Modules" title="Precision protocols for body and skin" copy="Select a treatment program to begin your restoration sequence." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </section>

        {/* Shop / Inventory */}
        <section>
          <SectionHeading kicker="Inventory Access" title="Formulas for sustained recovery" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        {/* Ingredients / Materials */}
        <section className="grid gap-6 md:grid-cols-3">
          {ingredients.slice(0, 3).map((ingredient) => (
            <div key={ingredient.id} className="blueprint-surface hover-lift p-8">
              <p className="micro-label mb-4 text-accent">Material_Ref: {ingredient.id}</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{ingredient.name}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{ingredient.usage}</p>
            </div>
          ))}
        </section>

        {/* Testimonials / System Logs */}
        <section>
          <SectionHeading kicker="System Logs" title="Verified performance metrics" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="paper-card p-8 border-l-4 border-l-primary">
                <p className="text-lg leading-relaxed text-foreground mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="text-sm font-mono text-muted-foreground">{testimonial.customerName}</span>
                  <span className="micro-label text-accent">OPT: {testimonial.rating}.0</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Memberships / Subscriptions */}
        <section>
          <SectionHeading kicker="Subscription Protocols" title="Automated restoration scheduling" />
          <div className="grid gap-6 md:grid-cols-2">
            {memberships.map((membership) => (
              <div key={membership.id} className="glass-panel hover-lift p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-3xl font-bold text-foreground">{membership.name}</h3>
                  <span className="micro-label bg-primary/10 text-primary px-3 py-1 rounded-full">{membership.priceLabel}</span>
                </div>
                <p className="text-muted-foreground leading-7">{membership.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Keep the functional components */}
      <WellnessAssistant />
      <WellnessEntityGraph />
    </div>
  );
}
