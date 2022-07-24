module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        main: 'var(--color-main)',
        sub: 'var(--color-sub)',
        'main-accent': 'var(--color-main-accent)',
        'sub-accent': 'var(--color-sub-accent)',
        peach: 'var(--color-peach)',
        magnolia: 'var(--color-magnolia)',
        geranium: 'var(--color-geranium)',
        'forest-green': 'var(--color-forest-green)',
        // https://uicolors.app/edit?sv1=tia-maria:50-fef6ee/100-fdecd7/200-fbd4ad/300-f7b57a/400-f38c44/500-f06d1f/600-e15315/700-cb4315/800-953217/900-782b16
        'tia-maria': {
          50: '#fef6ee',
          100: '#fdecd7',
          200: '#fbd4ad',
          300: '#f7b57a',
          400: '#f38c44',
          500: '#f06d1f',
          600: '#e15315',
          700: '#cb4315',
          800: '#953217',
          900: '#782b16',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
}
