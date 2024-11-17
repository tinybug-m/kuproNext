/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing:{
        "2.5" : "10px",
      },
      colors: {
        primary: "#357BBC",
        secondary: "#29978E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      linearGradientColors: {
        "kupro-gradient": ["bg-blue-600", "bg-green-600"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        padding: "1rem",
        screens: {
          xs: "310px",
          sm: "360px",
          md: "600px",
          xl: "1260px",
        },
      },

      screens: {
        xs: "320px",
        sm: "360px",
        md: "600px",
        xl: "1260px",
      },
    },
  },
  plugins: [],
};
