import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Get the raw request body
    const rawBody = await request.text();
    console.log('Raw request body:', rawBody);

    if (!rawBody) {
      return new Response(JSON.stringify({
        message: 'Empty request body',
        error: 'No data received'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Parse the JSON data
    let data;
    try {
      data = JSON.parse(rawBody);
      console.log('Parsed data:', data);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return new Response(JSON.stringify({
        message: 'Invalid JSON data',
        error: parseError instanceof Error ? parseError.message : 'JSON parse error',
        receivedBody: rawBody
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert into Supabase with exact field names
    const { data: insertedData, error: insertError } = await supabase
      .from('applications')
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        job: data.job,
        tools: data.tools,
        why: data.why,
        email: data.email,
        created_at: new Date().toISOString()
      });

    if (insertError) {
      console.error('Supabase error:', insertError);
      return new Response(JSON.stringify({
        message: 'Database error',
        error: insertError.message,
        details: insertError.details
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Application submitted successfully',
      data: insertedData
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
