import Link from "next/link";
import type { JournalArticle } from "@/types/wellness";

export function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <Link href={`/journal/${article.slug}`} className="botanical-card block rounded-[2rem] p-6 transition hover:-translate-y-1">
      <p className="section-kicker">{article.category}</p>
      <h3 className="mt-4 font-serif text-3xl text-stone">{article.title}</h3>
      <p className="mt-4 leading-7 text-muted">{article.excerpt}</p>
    </Link>
  );
}
