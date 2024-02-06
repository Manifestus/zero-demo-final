import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import BottomMenu from "@/components/BottomMenu";
import { Box, Button, Stack } from "@mui/material";
import ProfileSettings from "@/components/ProfileSettings";

export default function Home() {
  return (
    <>
      <ProfileSettings />
      <Box
        style={{
          backgroundImage: `url("https://res.cloudinary.com/du7w5i2uh/image/upload/v1706895304/OAI_-_APP_MOCKUP_IMAGE_-_1_vjmupa.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            height: "80%",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            frameBorder="0"
            scrolling="no"
            src=""
            width="100%"
            height="80%"
          />
          {/* <Button variant="contained" sx={{ width: "50%" }}>
            Start
          </Button> */}
        </Stack>
      </Box>
    </>
  );
}
