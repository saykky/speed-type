/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'gradient-shimmer': 'gradientShimmer 4s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                gradientShimmer: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
        },
    },
    plugins: [],
}
