"use client";

import { FormEvent, useState, useTransition } from "react";

export function WellnessAssistant() {
  const [prompt, setPrompt] = useState("I feel depleted and want something calming. What should I book?");
  const [response, setResponse] = useState("Ask for a ritual recommendation grounded in our services and products.");
  const [isPending, startTransition] = useTransition();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      const result = await fetch("/api/wellness-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = (await result.json()) as { message?: string };
      setResponse(data.message ?? "Please try again with a little more detail.");
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="botanical-card grid gap-8 rounded-[2rem] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
        <div>
          <p className="section-kicker">AI wellness assistant</p>
          <h2 className="mt-3 font-serif text-4xl text-stone">Find your ritual</h2>
          <p className="mt-5 leading-7 text-muted">Receive calm, non-medical guidance using the spa menu, product rituals, and botanical ingredients.</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            className="min-h-32 w-full rounded-3xl border border-border bg-background/50 p-4 text-foreground shadow-inner"
            aria-label="Wellness assistant prompt"
          />
          <button className="forest-button px-6 py-3" disabled={isPending}>{isPending ? "Composing..." : "Recommend a ritual"}</button>
          <div className="rounded-3xl border border-border bg-background/35 p-5 leading-7 text-muted">{response}</div>
        </form>
      </div>
    </section>
  );
}
