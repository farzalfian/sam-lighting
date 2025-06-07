
module.exports = {
        theme: {
        extend: {
            animation: {
            fadeIn: 'fadeIn 1.5s ease-out forwards',
        },
            keyframes: {
        fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
            },
        },
            fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
            'oswald': ['Oswald', 'sans-serif'],
            'montserrat': ['Montserrat', 'sans-serif'],
            'rubik' : ['Rubik']
            }
        }
        },
        // ...
    }