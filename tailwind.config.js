module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7B84B",
        secondary: ["#8B8F92", "#5E6468", "#1E1D1A", "#28ACA6", "#5ED36A", "#935CBD", "#70A3EE"]
      },
      fontFamily: {
        "poppins-regular": "Poppins-Regular",
        "poppins-medium": "Poppins-Medium",
        "poppins-semibold": "Poppins-SemiBold",
        "proxima-extrabold": "ProximaNovaExtraCondensed-ExtraBold"
      }
    },
  },
  plugins: [],
}
