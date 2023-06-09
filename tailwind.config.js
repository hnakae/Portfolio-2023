/** @type {import('tailwindcss').Config} */
// const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // gordita: ["var(--font-gordita)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        coffee: "#f0e7db",
        opaque: "#ffffff90",
        brand: "#1582CC",
        brandDark: "#00d5ff",
        brandPurple: "#ebdbff",
        brandWhite: "#fff",
        brandGray: "#f5f7ff",
        brandBlue: "#F9FEFF",
        brandBlue2: "#dbeefd",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        // "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f0e7db 5px,#f0e7db 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
      },
    },
    screens: {
      // "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      // xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1366px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1024px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "768px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "568px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
