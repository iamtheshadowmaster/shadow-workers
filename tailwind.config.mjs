/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'shadow-blue': '#00BFFF',
        'shadow-magenta': '#FF007F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
