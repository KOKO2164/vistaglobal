/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1E40AF", // Aquí defines tu color personalizado
      },
    },
  },
  plugins: [],
};
