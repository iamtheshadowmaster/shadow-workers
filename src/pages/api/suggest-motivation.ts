import type { APIRoute } from 'astro';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!import.meta.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const { job, tools } = await request.json();

    if (!job || !tools) {
      return new Response(
        JSON.stringify({ error: 'Both job and tools are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

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
    console.error('Error in suggest-motivation:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate motivation',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
