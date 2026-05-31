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
    <div className="botanical-card rounded-[40px] p-10 md:p-12">
      <p className="section-kicker text-sandstone">Ritual guide</p>
      <h2 className="mt-4 font-serif text-4xl text-alabaster">Find your ritual</h2>
      <p className="mt-6 leading-7 text-muted">Receive calm, non-medical guidance using our spa menu and botanical ingredients.</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="min-h-32 w-full resize-none rounded-3xl border border-border bg-background/50 p-6 text-foreground shadow-inner transition focus:border-gold focus:ring-1 focus:ring-gold/50"
          aria-label="Wellness assistant prompt"
        />
        <button className="forest-button w-full px-6 py-4" disabled={isPending}>{isPending ? "Composing..." : "Recommend a ritual"}</button>
        <div className="rounded-3xl border border-border bg-background/35 p-5 leading-7 text-muted">{response}</div>
      </form>
      <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone/70">
        AI guidance grounded in services, products, and ingredients.
      </p>
      </div>
  );
}
