import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D87D4A",
                primary_light: "#FBAF85",
                dark: "#101010",
                grey: "#F1F1F1"
            },
            fontSize: {
                s1: "12px",
                s2: "13px",
                s3: "14px",
                s4: "15px",
                s5: "18px",
                s6: "20px",
                s7: "24px",
                s8: "28px",
                s9: "32px",
                s10: "36px",
                s11: "40px",
                s12: "56px"
            },
            screens: {
                xs: "520px",
                sm: "768px",
                md: "1024px",
                lg: "1280px",
                xl: "1640px"
            },
            backgroundImage: {
                hero: "url(/images/header.jpg)",
                lg_hero: "url(/images/lg-header.jpg)"
            }
        }
    },
    plugins: []
};
export default config;
