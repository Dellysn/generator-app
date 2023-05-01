import { MantineThemeOverride } from "@mantine/core";

export const themeOverrides: MantineThemeOverride = {
  colorScheme: "light",
  //   fontFamily: "Poppins, sans-serif",
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
  fontSizes: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
  defaultRadius: "0.5rem",
  colors: {
    brand: [
      "#EEDECC",
      "#ECCAA6",
      "#F1B97D",
      "#FFA94D",
      "#EA9841",
      "#D48939",
      "#B77B3B",
      "#9A6E40",
      "#826342",
      "#6F5941",
    ],
  },
  primaryColor: "brand",
};
