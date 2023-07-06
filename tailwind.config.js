const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ['"Alex Brush"', 'cursive'],
      // Tambahkan jenis font lainnya jika diperlukan
    },
    extend: {},
  },
  plugins: [],
});