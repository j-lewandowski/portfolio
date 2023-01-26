/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                oxygen: ["Oxygen", "sans-serif"],
                IBM: ["IBM Plex Mono", "sans-serif"],
            },
            colors: {
                primary: "#272B31",
                secondary: "#16191c",
                accent: "#5CF486",
            },
            backgroundImage: {
                prestika: 'url("./src/img/prestika.png")',
                supportdesk: 'url("./src/img/supportdesk.png")',
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
