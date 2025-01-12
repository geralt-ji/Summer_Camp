/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
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

