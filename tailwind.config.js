/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#F7F4EF",
        ink: "#0F1A2B",
        navy: "#152743",
        navyLight: "#1E3A5F",
        graphite: "#3A3A3A",
        blueDeep: "#1E3A5F",
        blueLight: "#5B8DB8",
        ember: "#E8672B",
        emberDark: "#C24E1B",
        sand: "#EDEAE4",
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
