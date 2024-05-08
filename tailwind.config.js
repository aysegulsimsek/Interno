/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    // content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            }
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        fontFamily: {
            primary: 'DM Serif Display',
            secondary: 'Jost',
        },
        backgroundImage: {
            hero: 'url(assets/hero/bg.jpg)',
            grid: 'url(assets/grid.png)',
        },
    }, // burada virgül eklendi
    extend: {

        colors: {

            primaryDEFAULT: '#292f36',
            primaryhover: '#343e4a',

            accentDEFAULT: '#cda274',
            accentsecondary: '#f4f0ec',
            accenthover: '#b88c5d',

            secondary: '#4d5053',


        }
    }, // burada virgül eklendi
    plugins: [],
};