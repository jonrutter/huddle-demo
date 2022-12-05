module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF52BF',
        light: '#EBFBFF',
        grey: '#808D99',
        dark: '#00252E',
      },
      backgroundImage: {
        'hero-desktop': `url('assets/images/bg-hero-desktop.svg')`,
        'hero-mobile': `url('assets/images/bg-hero-mobile.svg')`,
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
      boxShadow: {
        top: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), -5px 0px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
