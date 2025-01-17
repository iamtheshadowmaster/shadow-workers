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

    const { job } = await request.json();

    if (!job) {
      return new Response(
        JSON.stringify({ error: 'Job description is required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that suggests relevant software tools based on job descriptions. Focus on modern, widely-used tools."
        },
        {
          role: "user",
          content: `Based on this job description: "${job}", list 3-5 relevant software tools that this person might use daily. Return only the tool names separated by commas.`
        }
      ],
      temperature: 0.7,
      max_tokens: 100
    });

    return new Response(
      JSON.stringify({ tools: completion.choices[0].message.content }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error in suggest-tools:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate suggestions',
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
