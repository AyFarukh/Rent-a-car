import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#08090C',
        surface: '#12141C',
        border: '#2D303E',
        cyan: '#00F0FF',
        gold: '#D4AF37',
        muted: '#A0A4B8',
      },
      boxShadow: {
        cyan: '0 10px 30px rgba(0,240,255,.15)',
      },
    },
  },
  plugins: [],
};

export default config;
