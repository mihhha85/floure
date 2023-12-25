import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './component/*.{js,ts,jsx,tsx,mdx}',
		'./app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			colors: {
				'gold':{
					100: '#f9e7b9',
					200: '#978655',
				},
				'base': '#4f4742',
				backgroundImage: {
					'hero': "url('/public/header.png')",
				},
				boxShadow: {
					'hero': '0px 4px 4px rgba(0, 0, 0, 0.2)'
				}
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
			}
    },
  },
  plugins: [],
}
export default config;
