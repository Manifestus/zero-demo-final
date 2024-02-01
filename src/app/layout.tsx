"use client";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Navbar from "@/components/Navbar";
import AuthScreen from "./auth/page";

export default function RootLayout(props: { children: React.ReactNode }) {
  const [login, setLogin] = React.useState(true);
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {login && <AuthScreen isLoggedIn={setLogin} />}
            {!login && <>{props.children}</>}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
