/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // NEXTJS
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    //FLOWBITE
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}