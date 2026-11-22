/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FDF8EE',             // Warm sun-lit Brazilian cream / parchment
          surface: '#FFFFFF',        // Crisp white card surface
          surfaceMuted: '#F5EFE2',   // Warm sand / tropical linen surface
          espresso: '#18130F',       // Deep roasted coffee / cachaça charcoal
          charcoal: '#18130F',       // Primary heading dark
          ink: '#18130F',            // Defined alias for espresso/charcoal
          slate: '#4A433C',          // Warm muted body text
          green: '#0A4D2E',          // Deep Amazon rainforest green
          amazon: '#0A4D2E',         // Defined alias for deep Amazon green
          emerald: '#057A44',        // Vivid Brazilian flag / poster emerald
          ochre: '#E59A23',          // Warm Tropical Sun Gold / Ochre
          yellow: '#FACC15',         // Vivid Canary yellow accent
          terracotta: '#D9532E',     // Warm Bahian clay & hibiscus coral
          blue: '#0E2954',           // Deep Atlantic & Hyacinth Macaw blue
          sand: '#E6DEC8',           // Warm sand hairline border
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Oswald"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 6px rgba(24, 19, 15, 0.04), 0 6px 16px rgba(24, 19, 15, 0.03)',
        'card': '0 8px 28px -4px rgba(24, 19, 15, 0.06), 0 2px 8px -1px rgba(24, 19, 15, 0.04)',
        'card-hover': '0 16px 36px -6px rgba(24, 19, 15, 0.10), 0 4px 12px -2px rgba(24, 19, 15, 0.05)',
        'polaroid': '0 18px 35px -5px rgba(0, 0, 0, 0.32), 0 4px 12px rgba(0, 0, 0, 0.18)',
        'float': '0 24px 48px -12px rgba(10, 77, 46, 0.22)',
        'modal': '0 24px 60px -12px rgba(24, 19, 15, 0.28)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      letterSpacing: {
        'editorial': '0.08em',
        'masthead': '0.14em',
      },
      animation: {
        fadeIn: 'fadeIn 240ms cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in': 'fadeIn 240ms cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
