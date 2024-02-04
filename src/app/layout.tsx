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
            <Box sx= {{ 
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "auto",
                alignSelf: "stretch",

                alignItems: "center",
                justifyContent: "center",
            }}>
              <Box 
                sx= {{ display: "flex", flexDirection: "column",
                maxWidth: "1200px" , minHeight: "100%", "flex": 1, overflowY: "auto",
              }}>

            
            {login && <AuthScreen isLoggedIn={setLogin} />}
            {!login && 
                <>
                  <Box sx={{ 
                        display: 'flex', flexDirection: 'column', 
                        minHeight: '100%',
                        width: "100%",
                        minWidth: "min(100vw, 600px)",
                        backgroundColor: "lightBlue",
                        
                        }}>
                    {/* Main Content Area */}
                    <Box component="main" sx={{ flex: '1 1 auto', overflowY: 'auto', py: 2, px: 3 }}>
                      { props.children }
                    </Box>
                    
                    {/* Fixed Footer */}
                    <BottomMenu/>
                  </Box>
                </>
            }
            </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
