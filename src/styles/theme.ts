import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    blue: {
      "900": "#1A365D",
      "800": "#2A4365",
      "700": "#2C5282",
      "600": "#2B6CB0",
      "500": "#3182CE",
      "400": "#4299E1",
      "300": "#63B3ED",
      "200": "#90CDF4",
      "100": "#BEE3F8",
      "50": "#EBF8FF",
    },
    brand:{
      "bg": "#242423",
      "bsb": "#277CE0",

    }

  },
  fonts: {
    headings: 'JetBrains Mono',
    body: 'JetBrains Mono',
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    thin: 100,
    xlight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    xbold: 800,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.bg',
        color: 'gray.50',
      }
    }
  }
})