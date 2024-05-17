/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts, css}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0.9375rem',
				sm: '1rem',
				lg: '1rem',
				xl: '10rem',
				'2xl': '13.0625rem'
			}
		},
		fontSize: {
			'3xs': '0.75rem',
			'2xs': '0.875rem',
			xs: '0.9375rem',
			base: '1rem',
			sm: '1.0625rem',
			md: '1.125rem',
			lg: '1.375rem',
			xl: '1.4375rem',
			'2xl': '1.5625rem',
			'3xl': '1.75rem',
			'4xl': '1.875rem',
			'5xl': '2.1875rem',
			'6xl': '2.9125rem'
		},
		extend: {
			fontFamily: {
				poppins: ["'Poppins'", 'sans-serif']
			},
			colors: {
				// TODO: add better color palette
				primary: {
					DEFAULT: '#9381ff'
				},
				secondary: {
					DEFAULT: '#f2f2f2'
				},
				accent: {
					DEFAULT: '#06191d'
				},
				text: {
					DEFAULT: '#010205'
				}
			},
			boxShadow: {
				blogCard: '0 0.6rem 1rem rgba(26,36,39,.1)',
				page: 'inset 0 9rem 9rem -5.5rem #f1f8fa'
			},
			backgroundImage: {
				main: 'linear-gradient(#ffc619, #ff9a19);'
			},
			screens: {
				'2xl': '1558px'
			}
		}
	},
	plugins: []
};
