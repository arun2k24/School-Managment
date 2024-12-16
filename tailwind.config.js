// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: { screens: {
      'xs': '480px', 
      '3xl': '1600px',
    },},

  },
  plugins: [require('daisyui')],
 
};
