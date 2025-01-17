import type { APIRoute } from 'astro';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { job, tools } = await request.json();

    const prompt = `Given this person's job as "${job}" and their daily tools "${tools}", write 2 sentences to show motivation to join Shadow's Customer Advisory Board (CAB). Keep it concise and playful.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a witty assistant helping users write motivation statements. Keep responses playful, but professional enough for a business context."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 150
    });

    return new Response(
      JSON.stringify({ motivation: completion.choices[0].message.content }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate motivation' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
