import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#2d2d2d',
        accent: '#FFD700',
        'background-dark': '#121212',
        'background-light': '#ffffff',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
      },
    },
  },
  plugins: [],
  extend: {
        keyframes: {
          slide: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' }
          }
        },
        animation: {
          slide: 'slide 30s linear infinite'
        }
      }
} satisfies Config;
