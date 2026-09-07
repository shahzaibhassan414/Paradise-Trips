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
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        brand: {
          primary: "var(--brand-primary)",
          "primary-hover": "var(--brand-primary-hover)",
          "primary-light": "var(--brand-primary-light)",
          "primary-dark": "var(--brand-primary-dark)",
          "primary-to": "var(--brand-primary-to)",
          accent: "var(--brand-accent)",
          "accent-hover": "var(--brand-accent-hover)",
          "accent-light": "var(--brand-accent-light)",
          "accent-dark": "var(--brand-accent-dark)",
          "accent-to": "var(--brand-accent-to)",
          dark: "var(--brand-dark)",
          "dark-surface": "var(--brand-dark-surface)",
          "dark-border": "var(--brand-dark-border)",
          "dark-text": "var(--brand-dark-text)",
          "dark-muted": "var(--brand-dark-muted)",
          bg: "var(--brand-bg)",
          card: "var(--brand-card)",
          border: "var(--brand-border)",
          text: "var(--brand-text)",
          muted: "var(--brand-muted)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-outfit)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
