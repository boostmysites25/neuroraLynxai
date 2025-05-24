/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Old colors
        // primary: "#022539",
        // secondary: "#FB991C",
        primary: "#000000", // Black
        secondary: "#00a1ff", // Blue
        accent: "#808080", // Gray
        primary_text: "#ffffff", // White text for dark theme
        secondary_text: "#e0e0e0", // Light gray text
        background: "#121212", // Dark background
        dark_surface: "#1e1e1e", // Slightly lighter dark for cards/surfaces
        dark_border: "#333333", // Border color for dark theme
      },
      boxShadow: {
        large: "0px 0px 20px 5px rgba(0, 0, 0, 0.5)",
        inner_shadow: "inset 0 0 8px 1px rgba(0, 0, 0, 0.5)",
        dark_glow: "0px 0px 15px 2px rgba(0, 161, 255, 0.15)", // Blue glow for dark theme
      },
    },
  },
  plugins: [],
};
