import ProfileSettings from "@/components/ProfileSettings";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Chat() {
  const messages = [
    {
      sender: "John Doe",
      recipient: "Jane Doe",
      message:
        "Please meet Brian. He just landed in Riyadh and also works in pharmaceuticals! ",

      isSender: true,
      avatar: "/path/to/sender/avatar.jpg",
    },
    {
      sender: "Jane Doe",
      recipient: "John Doe",
      message:
        "Please meet Brian. He just landed in Riyadh and also works in pharmaceuticals! He has 7 patents and a Phd in biomedical sciences from Oxford. I noted that you both also love frequenting Mon -tana for fly fishing and have a mutual friend Alice Cooper from Los Angeles!",
      isSender: false,
      avatar: "/path/to/recipient/avatar.jpg",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: `120px`,
          position: "fixed",
          zIndex: 1000,
          width: "100vw",
          background: "#8aa7ae",
          flexShrink: 0,
        }}
      >
        <ProfileSettings />
        <Box
          sx={{
            display: "flex",
            width: "10%",
            alignItems: "end",
            justifyContent: "start",
            alignContent: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              pl: 2,
              pb: 1,
              mr: 2,
              alignItems: "end",
              height: "100%",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            Messaging
          </Typography>
          <Box sx={{ display: "flex", width: "100vw" }}>
            <Paper
              component="form"
              sx={{
                mb: 1,
                ml: 1,
                display: "flex",
                alignItems: "center",
                width: 200,
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.65)",
                height: "30px",
              }}
            >
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase inputProps={{ "aria-label": "search google maps" }} />
            </Paper>
          </Box>
        </Box>
      </Box>
      //adding an extra box to make the messages not top with bar
      <Box
        sx={{
          display: "flex",
          height: `65px`,
          flexShrink: 0,
          background: "#8aa7ae",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          height: `100vh`,
          width: "100vw",
          backgroundImage: `url("https://res.cloudinary.com/du7w5i2uh/image/upload/v1706639472/PAGE_1_-_Background_hrbsjh.png")`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: `100vh`,
            width: "100vw",
            padding: 2,
            overflowY: "auto",
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignSelf: message.isSender ? "flex-end" : "flex-start",
                mb: 2,
                p: 1,
                backgroundColor: message.isSender
                  ? "#abd5e0"
                  : "rgba(0, 0, 0, 0.35)",
                maxWidth: "70%",
                borderBottomRightRadius: message.isSender ? 0 : "20px",
                borderTopLeftRadius: message.isSender ? "20px" : 0,
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              {message.isSender ? null : (
                <Avatar src={message.avatar} alt={message.sender} />
              )}
              <Box sx={{ ml: 1 }}>
                {message.isSender ? null : (
                  <Typography variant="subtitle1" color={"white"}>
                    {message.sender}
                  </Typography>
                )}
                <Typography variant="body1" color={"white"}>
                  {message.message}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
