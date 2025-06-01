/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Important pour que Tailwind scanne vos fichiers
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Définit Inter comme police par défaut si vous l'importez
      },
      colors: {
        // Vous pouvez définir vos couleurs primaires/accent ici si vous n'utilisez pas les variables CSS
        // Exemple :
        // sky: {
        //   ...require('tailwindcss/colors').sky,
        //   DEFAULT: '#0ea5e9', // sky-500
        // },
      },
      // Animations et keyframes peuvent être ajoutés ici ou directement en CSS
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // ... autres keyframes utilisés dans vos composants ...
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      }
    },
    container: { // Configuration optionnelle du conteneur par défaut
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
  },
  plugins: [],
}