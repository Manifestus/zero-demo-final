"use client";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import ProfileSettings from "@/components/ProfileSettings";

function notificationsLabel(count: number) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function Messaging() {
  const messages = [
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
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
          background: "#ffdff2",
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
        }}
      ></Box>
      <Box
        sx={{
          height: `${messages.length * 200}px`,
          overflowY: "auto",
          border: "none",
          boxShadow: "none",
        }}
      >
        <List>
          {messages.map((message, index) => (
            <>
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    alt={message.name}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={message.name}
                  sx={{ display: "inline", pl: 2 }}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {message.message}
                      </Typography>
                      {` — ${message.date}`}
                      <IconButton
                        aria-label={notificationsLabel(100)}
                        sx={{ position: "absolute", top: 18, right: 35 }}
                      >
                        <Badge badgeContent={message.count} color="secondary">
                          <MailIcon />
                        </Badge>
                      </IconButton>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="middle" color="white" />
            </>
          ))}
        </List>
        <Box
          sx={{
            height: `${100}px`,
            overflowY: "auto",
            border: "none",
            boxShadow: "none",
          }}
        ></Box>
      </Box>
    </>
  );
}
