import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F5F5F7", // Studio Light Grey
                foreground: "#1A1A1A", // Deep Charcoal
                primary: "#111111", // Near Black (Headlines)
                secondary: "#E5E5E5", // Light Panel Grey
                accent: "#0055FF", // Interaction Blue (Subtle)
                "accent-foreground": "#FFFFFF",
                "panel": "#FFFFFF", // Pure white for cards
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                display: ["var(--font-syncopate)"],
            },
            backgroundImage: {
                "grid-pattern": "linear-gradient(to right, #E5E5E5 1px, transparent 1px), linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)",
                "vignette": "radial-gradient(circle, transparent 60%, rgba(0,0,0,0.05) 100%)",
            },
            boxShadow: {
                "studio": "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                "studio-hover": "0 20px 40px -10px rgba(0, 0, 0, 0.12)",
                "hairline": "0 0 0 1px rgba(0,0,0,0.08)",
            },
            animation: {
                "spin-slow": "spin 12s linear infinite",
                "float": "float 8s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
