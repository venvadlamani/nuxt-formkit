/** @type {import('tailwindcss').Config} */
import FormKitTailwind from '@formkit/themes/tailwindcss';
module.exports = {
  content: ['./formkit.config.js'],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [FormKitTailwind],
};
