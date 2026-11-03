/* Konfigurasi tema Tailwind (dimuat setelah cdn.tailwindcss.com). Ubah warna & font di sini. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Tema putih cream: cream = latar, ink = teks cokelat hangat, ac = aksen (taupe/emas lembut)
        cream: { 50: "#fffdf8", 100: "#faf6ee", 200: "#f2eadb", 300: "#e6d9bf" },
        ink: { 900: "#3f342a", 700: "#5c4d40", 500: "#7a6855" },
        ac: { DEFAULT: "#85704f", dark: "#695839" },
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif: ['"Playfair Display"', "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
