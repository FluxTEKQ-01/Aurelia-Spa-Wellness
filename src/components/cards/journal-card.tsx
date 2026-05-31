import Link from "next/link";
import type { JournalArticle } from "@/types/wellness";
import { journalImages } from "@/lib/media";
import { ImageBackdrop } from "@/components/ui/image-backdrop";

export function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <Link href={`/journal/${article.slug}`} className="botanical-card group flex h-full flex-col rounded-[1.5rem] p-6 transition hover:border-gold/40 md:p-10">
      <div className="image-veil relative mb-8 h-[250px] rounded-xl md:h-[320px]">
        <ImageBackdrop src={journalImages[article.slug] ?? journalImages["self-care-rituals"]} alt={article.title} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-moss">{article.category}</span>
        <span className="text-muted/50">•</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">5 min read</span>
      </div>
      <h3 className="font-serif text-3xl text-alabaster transition group-hover:text-gold">{article.title}</h3>
      <p className="mt-4 flex-grow leading-7 text-muted">{article.excerpt}</p>
      <span className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold">Read Article →</span>
    </Link>
  );
}
