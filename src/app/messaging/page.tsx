import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

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
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },
    {
      name: "John Doe",
      message: "Hello, world!",
      date: "2022-01-01",
      count: 5,
    },

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
          height: `100px`,
          position: "fixed",
          zIndex: 1000,
          width: "100vw",
          background: "#ffdff2",
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "end", }}>
        <Typography
          sx={{
            display: "flex",
            pl: 2,
            pb: 1,
            alignItems: "end",
            width: "100%",
            height: "100%",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Messaging
        </Typography>
        </Box>
        
      </Box>
      //adding an extra box to make the messages not top with bar
      <Box
        sx={{
          display: "flex",
          height: `70px`,
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
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={message.name}
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
                      <IconButton aria-label={notificationsLabel(100)}>
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
