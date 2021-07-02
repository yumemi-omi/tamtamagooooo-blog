module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      base: 'var(--color-base)',
      main: 'var(--color-main)',
      sub: 'var(--color-sub)',
      'main-accent': 'var(--color-main-accent)',
      'sub-accent': 'var(--color-sub-accent)',
      peach: 'var(--color-peach)',
      lavendar: 'var(--color-lavendar)',
      geranium: 'var(--color-geranium)',
      'forest-green': 'var(--color-forest-green)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
