import { JournalCard } from "@/components/cards/journal-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { journalArticles } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Journal", path: "/journal" });

export default function JournalPage() {
  return (
    <main className="flex-1 pt-32">
      <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-16">
        <SectionHeading kicker="Slow living insights" title="Journal" copy="Wellness guides, ingredient education, and self-care rituals for unhurried city living." />
      </section>
      <div className="mx-auto grid max-w-[1280px] gap-6 px-5 pb-24 md:grid-cols-3 md:px-16">
        {journalArticles.map((article) => <JournalCard key={article.id} article={article} />)}
      </div>
    </main>
  );
}
