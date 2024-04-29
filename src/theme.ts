import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";

export const darkTheme = createTheme({
  typography: {
    fontFamily: `Montserrat, roboto`,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#008B8B",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#141414",
    },
  },
});
