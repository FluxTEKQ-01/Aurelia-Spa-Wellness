import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { faqs, serviceCategories, services } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Services", path: "/services" });

export default function ServicesPage() {
  return (
    <main className="flex-1 px-5 py-20 lg:px-8">
      <SectionHeading kicker="Treatments" title="Service categories built around restoration" copy="Massage, facials, body rituals, aromatherapy, and holistic healing experiences." />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-5">
        {serviceCategories.map((category) => (
          <div key={category.id} className="botanical-card rounded-[2rem] p-5">
            <h2 className="font-serif text-2xl text-stone">{category.name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
      <section className="mx-auto mt-16 max-w-4xl space-y-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="botanical-card rounded-3xl p-5">
            <summary className="cursor-pointer font-serif text-xl text-stone">{faq.question}</summary>
            <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
