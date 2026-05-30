import Image from "next/image";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { faqs, serviceCategories, services } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Services", path: "/services" });

export default function ServicesPage() {
  return (
    <div className="flex-1 pb-20">
      
      {/* Hero with Image */}
      <div className="relative w-full h-[300px] lg:h-[400px] mb-16 rounded-3xl overflow-hidden glass-panel group">
        <Image 
          src="/images/services_hero.png" 
          alt="Spa Treatment Room" 
          fill 
          className="object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <SectionHeading kicker="Active Modules" title="Treatment Protocols" copy="Massage, facials, body rituals, aromatherapy, and holistic healing experiences engineered for optimal recovery." />
        </div>
      </div>

      <div className="space-y-24">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-accent" />
            <p className="micro-label text-accent">Protocol Categories</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {serviceCategories.map((category) => (
              <div key={category.id} className="blueprint-surface hover-lift p-6 border-t-2 border-t-primary/20">
                <h2 className="font-display text-xl font-bold text-foreground mb-3">{category.name}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-primary" />
            <p className="micro-label">Available Programs</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-border" />
            <p className="micro-label">System Queries (FAQ)</p>
            <div className="h-px w-12 bg-border" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.id} className="paper-card p-6 group cursor-pointer">
                <summary className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary opacity-50 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-4 pt-4 border-t border-border/50 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
