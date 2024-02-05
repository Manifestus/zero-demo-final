import { Box } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

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
      <Person2OutlinedIcon sx={{width: 27, height: 27, fontSize: "small"}} /> <SettingsOutlinedIcon sx={{width: 27, height: 27}}/>
    </Box>
  );
}
