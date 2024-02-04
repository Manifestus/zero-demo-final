"use client";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
// import Navbar from "@/components/Navbar";

// import BottomMenu from "@/components/BottomMenu";
import AuthScreen from "./auth/page";
import BottomMenu from "@/components/BottomMenu";

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
            {!login && (
              <>
                {/* Main Content Area */}
                {props.children}
                {/* Fixed Footer */}
                <Box sx={{ position: "fixed", bottom: 0, zIndex: 1000, width: "100vw" }}>
                  <BottomMenu />
                </Box>
              </>
            )}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
