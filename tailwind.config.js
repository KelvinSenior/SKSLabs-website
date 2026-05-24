module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#02040a",
        navy: "#060a17",
        cyan: "#2dd4bf",
        soft: "#cbd5e1",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(45, 212, 191, 0.12)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(45, 212, 191, 0.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.14), transparent 20%), radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.1), transparent 25%)",
      },
    },
  },
  plugins: [],
};
