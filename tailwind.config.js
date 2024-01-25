/** @type {import('tailwindcss').Config} */
export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	presets: [require('nativewind/preset')],
	theme: {
		extend: {}
	},
	plugins: []
}
