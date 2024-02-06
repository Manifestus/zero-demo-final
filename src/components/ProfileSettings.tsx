import { Box } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Link from "next/link";

export default function ProfileSettings() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        zIndex: 1000,
        position: "fixed",
        marginTop: "20px",
        padding: "30px",
      }}
    >
      <Link href="/profile">
        <Person2OutlinedIcon
          sx={{ color: "#646464", width: 27, height: 27, fontSize: "small" }}
        />
      </Link>
      <SettingsOutlinedIcon sx={{ color: "#646464", width: 27, height: 27 }} />
    </Box>
  );
}
