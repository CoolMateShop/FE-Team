/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                blueBtn: "#2f5acf",
                blueText: "#0939b2",
                yellowText: "#f9f86c",
                grayText: "#d9d9d9",
            }),
            maxWidth: ({ theme, breakpoints }) => ({
                s: "10rem",
                x: "16.25rem",
            }),
            screens: {
                ml: "960px",
            },
        },
    },
    plugins: [],
};
