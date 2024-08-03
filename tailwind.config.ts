import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        swing: {
          '0%': {
            transform: 'rotate(0deg)',
            'animation-timing-function': 'ease-out',
          },
          '25%': {
            transform: 'rotate(70deg)',
            'animation-timing-function': 'ease-in',
          },
          '50%': {
            transform: 'rotate(0deg)',
            'animation-timing-function': 'linear',
          },
        },
        swing2: {
          '0%': {
            transform: 'rotate(0deg)',
            'animation-timing-function': 'linear',
          },
          '50%': {
            transform: 'rotate(0deg)',
            'animation-timing-function': 'ease-out',
          },
          '75%': {
            transform: 'rotate(-70deg)',
            'animation-timing-function': 'ease-in',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
        swing: 'swing var(--uib-speed, 1.2s) linear infinite',
        swing2: 'swing2 var(--uib-speed, 1.2s) linear infinite',
      },
  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
