module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF52BF',
        light: '#EBFBFF',
        grey: '#808D99',
        dark: '#00252E',
      },
      backgroundImage: {
        'hero-desktop': `url('images/bg-hero-desktop.svg')`,
        'hero-mobile': `url('images/bg-hero-mobile.svg')`,
      },
      maxWidth: {
        200: '200px',
        124: '124px',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: [
          'Poppins',
          '"Open Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
