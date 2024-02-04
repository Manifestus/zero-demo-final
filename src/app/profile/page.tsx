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


export default function ProfilePage(props: { children: React.ReactNode }) {
  return <>
      
    <Box
      sx={{display: "flex", flexDirection: "column",
          alignItems: "center",
          height: "calc(100% + 75px)", width:"100%",
      }}
    >
    

      <Avatar
            alt="Profile Picture"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: "230px",
              height: "230px",
              // position: "absolute",
              // top: -110,
              marginBottom: "-115px",
            }}
          />
      
      <Box
        sx={{
          flexGrow: 1, width:"100%", 
          
          borderRadius: "min(8vw, 48px) min(8vw, 48px) 0 0",

          background: "linear-gradient(180deg, rgb(218 189 232) 0%, rgb(189 197 254) 50%, rgb(187 222 241) 100%)"
        }}
      >
        {/* <StatsAndName></StatsAndName>
        <Divider></Divider>
        <Bio></Bio>
        <Divider></Divider> */}

      </Box>
    </Box>
    
    </>
}

const StatsAndName =  () =>
{
  return <Box
  sx={{
    display: "flex", flexDirection: "row",

    marginTop: "115px",

    alignItems: "center"
  }}
>
  <Box
  sx={{
    display: "flex", flexDirection: "column",
    minWidth: "20%", maxWidth: "20%",
  }}
  >
    <Box
      sx={{
        display: "flex", flexDirection: "row",
      }}
    >
      <Box>TREE</Box>
      <Box>1390</Box>
    </Box>
    <Box
      sx={{
        display: "flex", flexDirection: "row",
      }}
    >
      <Box>Network</Box>
      <Box>190</Box>
    </Box>
  </Box>
  <Box
    sx={{
      display: "flex", flexDirection: "column",
      flexGrow: 1,
      flexShrink: 1,

      alignItems: "center",
    }}
  >
    <Box>Princess Reema</Box>
    <Box>www.thevine.earth/princessreema</Box>

  </Box>
  <Box
    sx={{
      display: "flex", flexDirection: "column",
      minWidth: "20%", maxWidth: "20%",
      alignItems: "flex-end",
    }}
  >
      <Box>LinkedIN</Box>
      <Box>Whatever</Box>
      <Box>Facebook</Box>
      <Box>X</Box>
  </Box>
  
</Box>
}

const Bio = () =>
{
  return <Box>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facere illum ut totam qui, quae doloribus, neque laudantium, ab numquam animi deleniti eum? Eligendi suscipit quidem praesentium dicta quod quos.</Box>
}