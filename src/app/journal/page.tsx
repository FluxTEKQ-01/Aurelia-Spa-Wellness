import { JournalCard } from "@/components/cards/journal-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { journalArticles } from "@/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Journal", path: "/journal" });

export default function JournalPage() {
  return (
    <div className="flex-1 pb-20">
      <SectionHeading kicker="System Logs" title="Recovery Data & Protocols" copy="Technical guides, material analysis, and self-care procedures for optimal human function." />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {journalArticles.map((article) => <JournalCard key={article.id} article={article} />)}
      </div>
    </div>
  );
}
