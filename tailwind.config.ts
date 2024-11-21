import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': "#81C3D7",
      },
      fontFamily: {
        'noto-serif': ['var(--font-noto-serif)'],
        'noto-sans-jp': ['var(--font-noto-sans-jp)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
