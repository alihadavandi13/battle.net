/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      margin: {
        calc: 'calc(100vh - 344px)',
    },
    },
    colors: {
      darkbg: "hsl(var(--darkbg))",
      hover: "hsl(var(--hover))",
      slideb: "hsl(var(--slideb))",
      textb: "hsl(var(--textb))",
      colb: "hsl(var(--colb))",
      hover2: "hsl(var(--hover2))",
      slidef: "hsl(var(--slidef))",
      hover3: "hsl(var(--hover3))",
      textc: "hsl(var(--textc))",
      search: "hsl(var(--search))",
      grey1: "hsl(var(--grey1))",
      textm: "hsl(var(--textm))",
      blitz: "hsl(var(--blitz))",
      pgb: "hsl(var(--pgb))",
      pgs: "hsl(var(--pgs))",
      pgc: "hsl(var(--pgc))",
      textd: "hsl(var(--textd))",
      texte: "hsl(var(--texte))",
      textbr: "hsl(var(--textbr))",
      bgslide: "hsl(var(--bgslide))",
      dis: "hsl(var(--dis))",
      hover4: "hsl(var(--hover4))",
      slidercol: "hsl(var(--slidercol))",
      textg: "hsl(var(--textg))",

    },
    screens: {
      xs: "0px",
      // => @media (min-width: 0px) { ... }

      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "720px",
      // => @media (min-width: 720px) { ... }

      lg: "960px",
      // => @media (min-width: 960px) { ... }

      custome3: "1030px",
      // => @media (min-width: 1030px) { ... }

      custome2: "1150px",
      // => @media (min-width: 1150px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }

      custome1: "1470px",
      // => @media (min-width: 1470px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "--darkbg": "226.67 17.65% 10%",
          "--bc": "0 0% 100%",
          "--hover": "218 11% 15%",
          "--slideb": "227 15% 12%",
          "--textb": "0 0% 100%",
          "--colb": "233 19% 8%",
          "--hover2": "231 10% 14%",
          "--slidef": "224 14% 15%",
          "--hover3": "220 9% 20%",
          "--textc": "240 2% 52%",
          "--search": "218 8% 20%",
          "--grey1": "255 2% 53%",
          "--textm": "240 2% 75%",
          "--blitz": "90 100% 43%",
          "--pgb": "227 18% 10%",
          "--pgs": "227 0% 40%",
          "--pgc": "227 0% 60%",
          "--textd": "240 2% 76%",
          "--texte": "240 2% 76%",
          "--textbr": "4 0% 0%",
          "--bgslide": "218 11% 15%",
          "--dis": "227 0% 60%",
          "--hover4": "220 9% 20%",
          "--slidercol": "225 2% 55%",
          "--textg": "240 2% 76%",
        },
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "--darkbg": "0 0% 100%",
          "--hover": "223 15% 91%",
          "--slideb": "227 0% 100%",
          "--textb": "4 0% 0%",
          "--colb": "224 27% 27%",
          "--hover2": "224 27% 14%",
          "--slidef": "223 39% 95%",
          "--hover3": "220 15% 95%",
          "--textc": "240 7% 77%",
          "--search": "219 3% 86%",
          "--grey1": "255 2% 36%",
          "--textm": "240 2% 26%",
          "--blitz": "209 100% 54%",
          "--pgb": "227 0% 90%",
          "--pgs": "227 0% 40%",
          "--pgc": "227 0% 20%",
          "--textd": "240 2% 76%",
          "--texte": "0 0% 92%",
          "--textbr": "0 0% 100%",
          "--bgslide": "224 27% 27%",
          "--dis": "0 0% 60%",
          "--hover4": "224 27% 14%",
          "--slidercol": "225 2% 55%",
          "--textg": "217 0% 15%",
        },
      },
    ],
  },
};
