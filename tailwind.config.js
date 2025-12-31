/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        primary: '#6b21a8', // purple-800
        secondary: '#3b82f6', // blue-500
        accent: '#06b6d4', // cyan-500
        muted: '#a1a1aa', // zinc-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #7c3aed, #2563eb)',
        'gradient-subtle': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, rgba(10, 10, 10, 0) 70%)',
      },
    },
  },
  plugins: [],
}

