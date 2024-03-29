"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        html: { height: "100%", margin: 0 },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgb(218 189 232) 0%, rgb(189 197 254) 50%, rgb(187 222 241) 100%)",
        },
      }),
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
