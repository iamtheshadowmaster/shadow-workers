import type { APIRoute } from 'astro';
import OpenAI from 'openai';

export const prerender = false;

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { job } = await request.json();

    if (!job) {
      return new Response(JSON.stringify({
        error: 'Job description is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that suggests software tools based on job descriptions. Provide a concise, comma-separated list of the most relevant tools."
        },
        {
          role: "user",
          content: `Suggest software tools commonly used by someone with this job: ${job}`
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const tools = completion.choices[0]?.message?.content || '';

    return new Response(JSON.stringify({
      tools
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error suggesting tools:', error);
    return new Response(JSON.stringify({
      error: 'Failed to suggest tools'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
