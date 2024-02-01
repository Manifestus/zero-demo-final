"use client";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Stack,
  Typography,
  Icon,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Image, Label } from "@mui/icons-material";
import Navbar from "@/components/Navbar";

export default function AuthScreen() {
  const [emailSignIn, setEmailSignIn] = useState(false);

  const handleEmailSignIn = () => {
    setEmailSignIn(true);
  };

  return (
    <>
      <Box
        style={{
          backgroundImage: `url("https://res.cloudinary.com/du7w5i2uh/image/upload/v1706639472/PAGE_1_-_Background_hrbsjh.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "40vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50px",
              }}
            >
              <img
                height={"100vh"}
                src="https://res.cloudinary.com/du7w5i2uh/image/upload/v1706639471/OAI_Placeholder_Logo_-_V1Asset_1_1_isweh1.svg"
              />
            </Box>
            <Stack
              spacing={1}
              direction="column"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h6"
                component="h1"
                color={"white"}
                fontWeight={"normal"}
                sx={{ mb: 2 }}
              >
                Welcome to ZERO-AI
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                color={"white"}
                fontSize={"0.75rem"}
                fontWeight={"lighter"}
                sx={{ mb: 2 }}
                align="center"
              >
                Bringing Humanity Together,
                <br /> One Connection at a Time
              </Typography>
            </Stack>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {!emailSignIn ? (
              <>
                <Stack spacing={1} direction="column">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor:
                        "rgba(232,189,219,1) 1",
                    }}
                    onClick={handleEmailSignIn}
                  >
                    Sign in with Email
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "white", color: "black" }}
                    startIcon={<GoogleIcon />}
                  >
                    Sign in with Google
                  </Button>
                  <Button variant="contained" startIcon={<FacebookIcon />}>
                    Sign in with Facebook
                  </Button>

                  <Button variant="contained">Sign Up</Button>
                </Stack>
              </>
            ) : (
              <Stack spacing={2} direction="column">
                <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={() => setEmailSignIn(false)}
                  sx={{
                    position: "absolute",
                    top: 60,
                    left: 8,
                    color: "white",
                  }}
                >
                  Back
                </Button>
                <TextField label="Email" variant="outlined" />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                />
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button variant="contained">Sign In</Button>
              </Stack>
            )}
          </Box>
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "transparent",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              color={"white"}
              fontSize={"0.65rem"}
              fontWeight={"lighter"}
              sx={{ mb: 2 }}
              align="center"
            >
              Privacy Policy
            </Typography>
            <Box sx={{ mx: 1 }}>
              <Typography
                variant="h5"
                component="h5"
                color={"white"}
                fontSize={"0.65rem"}
                fontWeight={"lighter"}
                sx={{ mb: 2 }}
                align="center"
              >
                -
              </Typography>
            </Box>

            <Typography
              variant="h5"
              component="h5"
              color={"white"}
              fontSize={"0.65rem"}
              fontWeight={"lighter"}
              sx={{ mb: 2 }}
              align="center"
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
