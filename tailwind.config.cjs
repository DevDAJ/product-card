/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: 'hsl(30, 38%, 92%)',
				ascent: 'hsl(158, 36%, 37%)',
				heading: 'hsl(215, 32%, 27%)',
				text: 'hsl(228, 12%, 48%)',
				card: 'hsl(0, 0%, 100%)',
			},
		},
	},
	plugins: [],
};
