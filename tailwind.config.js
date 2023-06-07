/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : "Nunito"
      }
    },
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

