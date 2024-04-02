/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../assets/bg2.png')",
        
        // Add more background images as needed
      },
    },
  },
  plugins: [],
}