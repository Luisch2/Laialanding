/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'brand-main': '#7F00B2',
				'brand-dark-blue': '#0E1017',
			}
		},
	},
	plugins: [],
}
