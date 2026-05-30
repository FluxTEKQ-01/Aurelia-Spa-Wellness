import { ingredients, products, services } from "@/data";

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt?: string };

  if (!prompt) {
    return Response.json({ message: "Tell me what you want to feel, and I can suggest a gentle starting ritual." }, { status: 400 });
  }

  const context = JSON.stringify({
    services: services.map(({ name, description, benefits }) => ({ name, description, benefits })),
    products: products.map(({ name, description, benefits }) => ({ name, description, benefits })),
    ingredients: ingredients.map(({ name, benefits, usage }) => ({ name, benefits, usage })),
  });

  if (!process.env.OPENROUTER_API_KEY) {
    return Response.json({
      message: "A calming starting point would be the Forest Reset Massage for body tension or the Botanical Recovery Facial for sensitive, depleted skin. Pair either with the Hinoki Body Oil or Blue Tansy Calm Serum. This is wellness guidance only, not medical advice.",
    });
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a calm luxury spa wellness assistant. No medical diagnosis, no cure claims, encourage professional consultation for health concerns. Use only this menu context: ${context}`,
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    return Response.json({ message: "I could not reach the wellness assistant right now. Please try again soon." }, { status: 502 });
  }

  const data = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
  return Response.json({ message: data.choices?.[0]?.message?.content ?? "I recommend beginning with a consultation so the ritual can be tailored." });
}
