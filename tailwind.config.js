const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#8441C7',
          400: '#8441C7',
          500: '#8441C7',
          600: '#8441C7',
          700: '#8441C7',
          800: '#370870',
          900: '#A5371B'
        },
        // gray
        gray: {
          50:"#f9fafb",
          100:"#f3f4f6",
          200:"#e5e7eb",
          300:"#d1d5db",
          400:"#9ca3af",
          500:"#6b7280",
          600:"#4b5563",
          700:"#374151",
          800:"#1f2937",
          900:"#111827"
        },
        dark: '#0e0e0f',
        light: '#efefef',
        main: '#8441C7',
        accent: "#370870",
        accent2: "#DCC7E9",
        accent3: "#14033A",
        accent4: "#A26EC9",


        pres1: "#8441C7",
        pres2: "#DCC7E9",
        pres3: "#A26EC9",
        pres4: "#370870",
      }
    }
  }
};

module.exports = config;