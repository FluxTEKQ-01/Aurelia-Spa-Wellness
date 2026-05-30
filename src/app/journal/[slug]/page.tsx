import { notFound } from "next/navigation";
import { journalArticles } from "@/data";
import { articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main className="mx-auto max-w-4xl flex-1 px-5 py-20 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }} />
      <p className="section-kicker">{article.category}</p>
      <h1 className="mt-5 font-serif text-6xl text-stone md:text-8xl">{article.title}</h1>
      <p className="mt-8 text-xl leading-9 text-muted">{article.excerpt}</p>
      <article className="mt-12 space-y-7 text-lg leading-9 text-muted">
        {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </article>
    </main>
  );
}
