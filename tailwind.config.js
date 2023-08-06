/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "mono": ['"Roboto Mono"', 'mono'],
        "inter": ['Inter', 'sans-serif'],
        "monserrat": ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

