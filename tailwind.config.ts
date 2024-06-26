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
                grey: "#F1F1F1",
                dark_grey: "#4C4C4C",
                grey_stroke: "#CFCFCF",
                error: "#CD2C2C"
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
                lg: "1217px",
                xl: "1640px"
            },
            backgroundImage: {
                hero: "url(/images/header.jpg)",
                lg_hero: "url(/images/lg-header.jpg)",
                circle_pattern: "url(/images/pattern-circles.svg)"
            }
        }
    },
    plugins: []
};
export default config;
