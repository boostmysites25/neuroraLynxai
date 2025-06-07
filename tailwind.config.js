/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black
        secondary: "#2561E6", // Blue
        // secondary: "#00a1ff", // Blue
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
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite alternate-reverse',
        'scanLine': 'scanLine 3s linear infinite',
        'holographicShift': 'holographicShift 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        holographicShift: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
