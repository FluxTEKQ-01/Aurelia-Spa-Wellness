import { faqs, ingredients, journalArticles, memberships, products, serviceCategories, services } from "@/data";

const groups = [
  { label: "Service Categories", items: serviceCategories.map((item) => item.name) },
  { label: "Services", items: services.map((item) => item.name) },
  { label: "Products", items: products.map((item) => item.name) },
  { label: "Ingredients", items: ingredients.map((item) => item.name) },
  { label: "Journal", items: journalArticles.map((item) => item.title) },
  { label: "Memberships", items: memberships.map((item) => item.name) },
  { label: "FAQs", items: faqs.map((item) => item.question) },
];

export function WellnessEntityGraph() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="botanical-card rounded-[2rem] p-6 md:p-8">
        <p className="section-kicker">Entity relationship map</p>
        <h2 className="mt-3 font-serif text-4xl text-stone">Static content model</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-7">
          {groups.map((group) => (
            <div key={group.label} className="rounded-3xl border border-border bg-background/30 p-4">
              <h3 className="text-sm font-semibold text-gold">{group.label}</h3>
              <ul className="mt-4 space-y-3 text-xs leading-5 text-muted">
                {group.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-foreground/5 p-3">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
