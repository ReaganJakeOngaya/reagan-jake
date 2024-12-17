/** @type {import('tailwindcss').Confiiig} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in src/
    "./public/index.html",        // Include the main HTML file
  ],
  theme: {
    extend: {
      animation: {
        loader: 'loader 1s linear infinite',
      },
      keyframes: {
        loader: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

