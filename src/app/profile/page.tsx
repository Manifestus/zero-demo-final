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
              src={profile.avatar}
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
                top: 120,
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
                alignContent="center"
                justifyContent="center"
                justifyItems="center"
                direction="column"
              >
                <Stack spacing={3} sx={{ mt: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SpaIcon />
                    <Typography variant="h6">25</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Diversity1Icon />
                    <Typography variant="h6">575</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid
                container
                xs={4}
                sx={{
                  justifyContent: "center",
                  flexGrow: 1,
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} sx={{ mt: 3 }}>
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"1rem"}
                    fontWeight={"bold"}
                    align="center"
                  >
                    {profile.name}
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    color={"black"}
                    fontSize={"0.60rem"}
                    fontWeight={"bold"}
                    align="center"
                  >
                    {`https://www.thevine.earth/${profile.nickname}`}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={1} direction={"column"} alignItems={"center"}>
                  <Stack spacing={1}>
                    <Facebook />
                    <LinkedIn />
                    <Instagram />
                    <X />
                  </Stack>
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
                  {profile.paragraph1}
                </Typography>
                <Divider
                  sx={{ background: "white", borderBottomWidth: "2px" }}
                />
              </Stack>
              {/* Boxes for how and interests */}
              <Grid container sx={{ position: "absolute", mt: 3 }} spacing={1}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "90%",
                      height: "15vh", // 15% of the parent
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Stack
                        spacing={1}
                        direction={"column"}
                        alignItems={"center"}
                        overflow={"auto"}
                      >
                        <Typography
                          variant="h1"
                          component="h1"
                          color={"black"}
                          fontSize={"0.89rem"}
                          fontWeight={"bold"}
                        >
                          HOW CAN I HELP YOU?
                        </Typography>
                        <Typography
                          variant="h1"
                          component="h1"
                          color={"black"}
                          fontSize={"0.79rem"}
                          fontWeight={"lightest"}
                        >
                          {profile.paragraph2}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "#e1e2ff",
                      width: "100%",
                      height: "90%",
                      boxShadow: 3,
                      borderRadius: "5%",
                      justifyContent: "center",
                      alignContent: "center",
                      justifyItems: "center",
                    }}
                    overflow={"auto"}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Stack
                        spacing={1}
                        direction={"column"}
                        alignItems={"center"}
                        mt={1}
                      >
                        <Typography
                          variant="h1"
                          component="h1"
                          color={"black"}
                          fontSize={"0.89rem"}
                          align="center"
                          fontWeight={"bold"}
                        >
                          INTERESTS
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "80%",
                            height: "13vh",
                          }}
                        >
                          <Typography
                            variant="h1"
                            component="h1"
                            color={"black"}
                            fontSize={"0.79rem"}
                            fontWeight={"lightest"}
                          >
                            {profile.interests.join(" ")}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Typography
                variant="h1"
                component="h1"
                color={"black"}
                fontSize={"0.89rem"}
                fontWeight={"bold"}
                sx={{ position: "absolute", top: 290 }}
              >
                LET'S CONNECT!
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  top: 320,
                  width: "100%",
                }}
              >
                <Grid container spacing={{ xs: 1, md: 3 }}>
                  {profile.images.map((image, index) => (
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
