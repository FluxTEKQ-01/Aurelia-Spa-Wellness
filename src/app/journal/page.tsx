import { JournalCard } from "@/components/cards/journal-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { journalArticles } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Journal", path: "/journal" });

export default function JournalPage() {
  return (
    <main className="flex-1 px-5 py-20 lg:px-8">
      <SectionHeading kicker="Journal" title="Wellness guides, ingredient education, and self-care rituals" />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
        {journalArticles.map((article) => <JournalCard key={article.id} article={article} />)}
      </div>
    </main>
  );
}
