/** @type {import('tailwindcss').Config} */
module.exports = {
	// darkMode: "class",
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				darkIndigo: "#8C01FA",
				lightIndigo: "#618ADC",
				lightBlue: "#1FCFF1",
				lightPurple: "#9945FF",
				lightYellow: "#FFD512",
				lightGreen: "#19FB9B",
				lighterPurple: "#A962FF",
			},
		},
	},
	plugins: [],
};
