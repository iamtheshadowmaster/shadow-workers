import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email || !email.trim()) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({
        email: cleanEmail,
        created_at: new Date().toISOString()
      });

    if (error) {
      if (error.code === '23505') { // Unique violation
        return new Response(
          JSON.stringify({ error: 'Email already registered' }),
          { status: 409, headers: { 'Content-Type': 'application/json' } }
        );
      }
      throw new Error('Database error: ' + error.message);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully joined the waitlist!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Early access signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};