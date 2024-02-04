import {
  Avatar,
  Box,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
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

export default function ProfilePage() {
  return (
    <Paper>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "100vh",
          background: "#f0f4f1",
          position: "relative",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            height: "75vh",
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(191,194,254,1) 74%, rgba(232,189,219,1) 100%)",
          }}
          sx={{
            bgcolor: "background.paper",
            p: 3,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            boxShadow: 3,
            position: "relative",
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: "230px",
              height: "230px",
              position: "absolute",
              top: -110,
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
              <Stack spacing={3}>
                <Typography variant="h6">
                  <SpaIcon />1
                </Typography>
                <Typography>
                  <Diversity1Icon />2
                </Typography>
              </Stack>
            </Grid>
            <Grid container xs={5} justifyContent={"center"}>
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"black"}
                  fontSize={"1rem"}
                  fontWeight={"bold"}
                  align="center"
                >
                  Princess Reema
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"black"}
                  fontSize={"0.60rem"}
                  fontWeight={"bold"}
                  align="center"
                >
                  https://www.thevine.earth/princessreema
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
              <Divider sx={{ background: "white", borderBottomWidth: "2px" }} />
              <Typography
                variant="h1"
                component="h1"
                color={"black"}
                fontSize={"0.70rem"}
                align="center"
                fontWeight={"bold"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Divider sx={{ background: "white", borderBottomWidth: "2px" }} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
