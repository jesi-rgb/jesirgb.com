/** @type {import('tailwindcss').Config}*/

// daisyui: {
// 	logs: false,
// 	themes: [
// 		{
// 			light: {
// 				primary: '#226E48',
// 				'primary-focus': '#042B24',
// 				'primary-content': '#F6FFFB',
// 				secondary: '#a78bfa',
// 				accent: '#D1BC03',
// 				neutral: '#677471',
// 				'base-100': '#F6FFFB',
// 				'base-200': '#FAFFFD',
// 				'base-300': '#E5FDF2',
// 				'base-content': '#042B24',
// 				info: '#3abff8',
// 				success: '#4ade80',
// 				warning: '#fbbd23',
// 				error: '#f87272'
// 			}
// 		},
// 		{
// 			dark: {
// 				primary: '#a7f3d0',
// 				'primary-focus': '#73E0B4',
// 				'primary-content': '#021714',
// 				secondary: '#a78bfa',
// 				accent: '#fef9c3',
// 				neutral: '#677471',
// 				'base-100': '#021713',
// 				'base-200': '#001410',
// 				'base-300': '#010D0B',
// 				'base-content': '#fff',
// 				info: '#3abff8',
// 				success: '#4ade80',
// 				warning: '#fbbd23',
// 				error: '#f87272'
// 			}
// 		},
// 		'cupcake'
// 	]
// },
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['AT Name Sans Variable', 'Supreme', 'apple-system', '--system-ui'],
				mono: ['Iosevka'],
				title: ['Whirly Birdie', 'New Title']
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
	]
};

module.exports = config;
