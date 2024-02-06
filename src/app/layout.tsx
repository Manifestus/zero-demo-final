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
import ProfileSettings from "@/components/ProfileSettings";
import { AnimatePresence, motion } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";
import { useState } from "react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const [login, setLogin] = useState(true);
  const [messenger, setMessenger] = useState(0);
  
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
                <TransitionProvider>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  {props.children}
                </TransitionProvider>
                {/* Fixed Footer */}
                <BottomMenu />
              </>
            )}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
