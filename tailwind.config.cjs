/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['Noto Serif', 'serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			colors: {
				primary: '#0C3934',
				background: '#F8EBEE'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
