import localFont from "next/font/local";

export const displayFont = localFont({
  src: [
    {
      path: "../../assets/fonts/RobotoCondensed-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const bodyFont = localFont({
  src: [
    {
      path: "../../assets/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const monoFont = localFont({
  src: [
    {
      path: "../../assets/fonts/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/JetBrainsMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/JetBrainsMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const coreFontVariables = `${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`;
