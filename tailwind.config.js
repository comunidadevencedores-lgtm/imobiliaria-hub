/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Trato Feito (branding_ecossistema_aurizon.pdf)
        offwhite: "#EFEFEF",
        ink: "#1A1A1A",
        graphite: "#333333",
        brand: "#2E83B6",      // azul principal — CTAs, destaques
        brandDark: "#065E93",  // azul escuro — hover, títulos institucionais
        blueDeep: "#065E93",
        blueLight: "#8BCDF2",
        skyPale: "#BEE4FA",
        sand: "#E0E0E0",
        grey: "#676767",
        greyLight: "#CDCCCC",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
