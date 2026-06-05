import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ntoria: {
          navy: "#1a3a6b",
          rose: "#e8315a",
          bg: "#ffffff",
          surface: "#f7f9fc",
          border: "#e0e0e0",
          divider: "#f0f0f0",
          text: {
            primary: "#1a1a1a",
            secondary: "#666666",
          },
        },
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
    },
  },
};

export default config;
