import { supabase } from '../../lib/supabase';

export async function GET() {
  try {
    // Fetch all use cases from the database
    const { data, error } = await supabase
      .from('use_cases')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Return the use cases as JSON
    return new Response(JSON.stringify({ use_cases: data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching use cases:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}