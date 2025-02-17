/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/flowbite"
  ],
  theme: {
    extend: {
      container:{
        center:true,
      }
    },
  },
  plugins: [ 'flowbite/plugin'],
}

