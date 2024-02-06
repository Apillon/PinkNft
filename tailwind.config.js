/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: { max: '1023px' },
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      hd: '1920px',
    },

    colors: {
      primary: '#E64492',
      secondary: '#F7AF39',

      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      yellow: '#FBBF24',
      orange: '#F7AF39',
      green: '#A9DC76',
      violet: '#AB9DF2',
      blue: '#78DCE8',

      body: '#9D9E91',
      bodyDark: '#6A6B63',
      border: '#050505',

      pink: {
        light: '#FF6188',
        DEFAULT: '#E64492',
        dark: '#C1135E',
      },

      bg: {
        lightest: '#F4F4EA',
        lighter: '#313442',
        light: '#1E212B',
        DEFAULT: '#141721',
        dark: '#06080F',
      },
    },

    fontFamily: {
      inter: ['Inter', 'ui-sans-serif', 'system-ui'],
    },

    container: {
      center: true,
      screens: {
        lx: '1440px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },

    extend: {
      backgroundImage: {
        'gradient-pink': 'linear-gradient(180deg, #E64492 0%, rgba(230, 0, 122, 0.00) 100%);',
        'gradient-header':
          'linear-gradient(0deg, rgba(5, 5, 5, 0.50) 0%, rgba(191, 18, 93, 0.50) 100%)',
        'gradient-orange':
          'linear-gradient(180deg, #BF125D 0%, #D61F69 50%, #F59E0B 100%);        ',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
