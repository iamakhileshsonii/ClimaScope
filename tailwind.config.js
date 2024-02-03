/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1D2837",
        light: "#2F4057",
        glass: "#ffffff24",
        transparent: "#ffffff00",
      },
      gradientColors: {
        "orange-pink": ["#FFA500", "#FF0080"],
        "dark-blue": ["#020024", "#063b46"],
      },
    },
  },
  plugins: [
    // Create a plugin to generate gradient color utilities
    function ({ addUtilities, theme, variants }) {
      const gradients = theme("gradientColors", {});

      const gradientUtilities = Object.keys(gradients).map((name) => ({
        [`.bg-gradient-${name}`]: {
          backgroundImage: `linear-gradient(to right, ${gradients[name].join(
            ", "
          )})`,
        },
      }));

      addUtilities(gradientUtilities, variants("background"));
    },
  ],
};
