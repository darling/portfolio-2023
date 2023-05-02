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
				primary: '#FDE2F3',
				background: '#2A2F4F'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
