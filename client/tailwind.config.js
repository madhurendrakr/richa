/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens:{
          'mobile': '200px',
          'tablet':'400px',
          'largeTab':'600px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
        }
    },
  },
  plugins: [],
}

