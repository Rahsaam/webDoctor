/** @type {import('tailwindcss').Config} */
export default {
  modules: [
    '@ant-design-vue/nuxt'
  ],
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

