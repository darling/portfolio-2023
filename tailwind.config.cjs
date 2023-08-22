/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans-serif']
			},
			colors: {
				primary: '#FDE2F3',
				background: '#2A2F4F'
			}
		}
	}
};
