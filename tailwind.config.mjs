/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'shadow-blue': '#3B82F6', // More professional blue (similar to Notion/OpenAI)
        'shadow-magenta': '#F43F5E', // Refined magenta
        'shadow-indigo': '#6366F1', // Secondary accent color
        'shadow-purple': '#8B5CF6', // Additional accent
        'shadow-teal': '#14B8A6', // Success color
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
