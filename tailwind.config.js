module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'home': "url('/bghome.jpg')",
      }),
    },
    screens: {
      'xs': '350px',
      // => @media (max-width: 640px) { ... }

      'sm': '576px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '992px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
