/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0A1330",
          deep: "#060D22",
          light: "#121F45",
        },
        ocean: {
          DEFAULT: "#0F1F4D",
          dark: "#0B173B",
          card: "#12255C",
        },
        pearl: {
          DEFAULT: "#F5F7FB",
          pure: "#FFFFFF",
        },
        mist: {
          DEFAULT: "#E4EAF7",
          dark: "#D0DBF0",
        },
        coral: {
          DEFAULT: "#FF7A3D",
          hover: "#E86529",
          glow: "rgba(255, 122, 61, 0.35)",
          subtle: "rgba(255, 122, 61, 0.12)",
        },
        ice: {
          DEFAULT: "#9DB8FF",
          glow: "rgba(157, 184, 255, 0.25)",
          border: "rgba(157, 184, 255, 0.2)",
        },
        ink: {
          dark: "#0A1330",
          body: "#3B4766",
          muted: "#6B7A99",
        },
        lightText: {
          heading: "#FFFFFF",
          body: "#C9D3EE",
          muted: "#8A99C0",
        }
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        accent: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '44px',
        'pill': '9999px',
      },
      boxShadow: {
        'coral-glow': '0 0 35px -5px rgba(255, 122, 61, 0.45)',
        'coral-btn': '0 10px 25px -5px rgba(255, 122, 61, 0.35), 0 0 0 1px rgba(255, 122, 61, 0.4)',
        'ice-glow': '0 0 30px -5px rgba(157, 184, 255, 0.25)',
        'glass-dark': '0 20px 40px -15px rgba(6, 13, 34, 0.7), inset 0 1px 0 0 rgba(157, 184, 255, 0.15)',
        'glass-light': '0 20px 40px -15px rgba(10, 19, 48, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
      },
      letterSpacing: {
        cinematic: '0.18em',
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
}
