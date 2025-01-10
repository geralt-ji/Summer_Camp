/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/**/*.vue",
    './plugins/**/*.{vue,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  corePlugins: {
    container: false,
  },
}

