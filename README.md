# Shadow Landing Page

A high-performance landing page for Shadow, built with Astro and Tailwind CSS.

## Features

- ⚡️ Super fast loading time with Astro
- 🎨 Modern design with Tailwind CSS
- 📝 Waitlist functionality with Supabase
- 📱 Fully responsive
- 🔒 Type-safe API endpoints

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create a new project at [Supabase](https://supabase.com)
   - Create a new table called `waitlist` with columns:
     - `id` (uuid, primary key)
     - `email` (text, unique)
     - `created_at` (timestamp with timezone)
   - Copy your project URL and anon key
   - Create `.env` file from `.env.example` and add your Supabase credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)
