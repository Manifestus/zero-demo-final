"use client";
import {
  Avatar,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  Box as MuiBox,
  Box,
  Button,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  BorderOuterRounded,
  X,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import SpaIcon from "@mui/icons-material/Spa";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ProfileSettings from "@/components/ProfileSettings";
import TransitionProvider from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { profile } from "../utils/profile";
import { donation } from "../utils/donation";

export default function ProfilePage() {
  return (
    <TransitionProvider>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 1 }}
      />
      <Paper>
        <ProfileSettings />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "100vh",
            background: "#f0f4f1",
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              background:
                "linear-gradient(180deg, rgb(218 189 232) 0%, rgb(189 197 254) 50%, rgb(187 222 241) 100%)",
            }}
            top={200}
            sx={{
              bgcolor: "background.paper",
              p: 3,
              flexGrow: 1,
              width: "100%",
              borderRadius: "min(8vw, 48px) min(8vw, 48px) 0 0",
              boxShadow: 3,
              position: "relative",
            }}
          >
            <Avatar
              alt="Profile Picture"
              src={donation.avatar}
              sx={{
                width: "230px",
                height: "230px",
                position: "absolute",
                top: -110,
                alignItems: "center",
              }}
            />
            <Grid
              container
              sx={{
                position: "absolute",
                top: 170,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                justifyItems: "center",
              }}
              spacing={{ xs: 3 }}
            >
              <Grid
                container
                xs={4}
                sx={{
                  justifyContent: "center",
                  flexGrow: 1,
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} sx={{ mt: 3, ml: 3 }}>
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"1rem"}
                    fontWeight={"bold"}
                    align="center"
                  >
                    {donation.name}
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"0.60rem"}
                    fontWeight={"bold"}
                    align="center"
                  >
                    {`https://www.thevine.earth/${donation.nickname}`}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Box
              sx={{
                position: "absolute",
                top: 260,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                justifyItems: "center",
              }}
            >
              <Stack sx={{ width: "80vw" }} spacing={2}>
                <Divider
                  sx={{ background: "white", borderBottomWidth: "2px" }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  color={"black"}
                  fontSize={"0.79rem"}
                  align="center"
                  fontWeight={"lightest"}
                >
                  {donation.paragraph1}
                </Typography>
                <Divider
                  sx={{ background: "white", borderBottomWidth: "2px" }}
                />
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  top: 90,
                  width: "100%",
                  direction: "column",
                }}
              >
                <Stack
                  sx={{
                    width: "80vw",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"1.2rem"}
                    fontWeight={"bold"}
                  >
                    250 Points
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"1.2rem"}
                    fontWeight={"bold"}
                  >
                    For Every
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"1.2rem"}
                    fontWeight={"bold"}
                  >
                    $100 Dollars Donated
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  top: 170,
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  DONATE NOW
                </Button>
              </Box>

              <Typography
                variant="h1"
                component="h1"
                color={"black"}
                fontSize={"0.89rem"}
                fontWeight={"bold"}
                sx={{ position: "absolute", top: 230 }}
              >
                LET'S CONNECT!
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  top: 260,
                  width: "100%",
                }}
              >
                <Grid container spacing={{ xs: 1, md: 3 }}>
                  {donation.images.map((image, index) => (
                    <Grid item xs={4} sm={6} md={4} key={index}>
                      <MuiBox
                        component="img"
                        src={image} // Replace with your image path
                        sx={{ width: "100%", height: "auto" }}
                        alt="Image"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </TransitionProvider>
  );
}
