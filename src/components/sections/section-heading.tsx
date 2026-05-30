export function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-8 bg-primary/50" />
        <p className="micro-label">{kicker}</p>
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tighter text-foreground md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{copy}</p> : null}
    </div>
  );
}
