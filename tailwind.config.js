module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar-hide')]
};
