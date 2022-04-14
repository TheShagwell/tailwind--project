const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'body': 'Ubuntu, sans-serif'
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            black: colors.black,
            'gray': colors.slate,
            'blue': {
                50: '#b3c0ff',
                100: '#8ea1ff',
                200: '#7b91ff',
                300: '#6881ff',
                400: '#5572ff',
                500: '#4262ff',
                600: '#3b58e6',
                700: '#2e45b3',
                800: '#213180',
                900: '#141d4c',
            }
        },
        extend: {
            fontSize: {
                'display-1': ['4.209rem', {
                    lineHeight: '1.3'
                }],
                'display-2': ['3.157rem', {
                    lineHeight: '1.3'
                }],
                'display-3': ['2.369rem', {
                    lineHeight: '1.3'
                }],
                'display-4': ['1.777rem', {
                    lineHeight: '1.3'
                }],
                'display-5': ['1.333rem', {
                    lineHeight: '1.3'
                }]
            }
        },
    },
    plugins: [],
}