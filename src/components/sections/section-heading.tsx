export function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.015em] text-alabaster md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-muted">{copy}</p> : null}
    </div>
  );
}
