import defaultTheme from 'tailwindcss/defaultTheme'
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			fontFamily: {
				sans: ['"Latinotype Mohr"', ...defaultTheme.fontFamily.sans],
				serif: ['"Latinotype Mohr Alt"', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [typographyPlugin],
	darkMode: 'class',
}
