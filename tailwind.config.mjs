/** Tailwind CSS Configuration (explicit mjs to ensure pickup) */
/** Dark mode via class so next-themes can toggle <html class="dark"> */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      }
    }
  },
  plugins: []
};
