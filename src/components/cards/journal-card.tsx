import Link from "next/link";
import type { JournalArticle } from "@/types/wellness";

export function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <Link href={`/journal/${article.slug}`} className="paper-card hover-lift group block p-6 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <p className="micro-label">{article.category}</p>
      </div>
      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{article.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
    </Link>
  );
}
