/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				lg: '3rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			center: true,
		}
  },
  plugins: [],
}

