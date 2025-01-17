import type { APIRoute } from 'astro'
import { supabase } from '../../lib/supabase'

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response('Invalid email address', { status: 400 })
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }])

    if (error) {
      if (error.code === '23505') { // Unique violation
        return new Response('Email already registered', { status: 409 })
      }
      throw error
    }

    return new Response(JSON.stringify({ message: 'Successfully joined waitlist' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
