"use client";
import ProfileSettings from "@/components/ProfileSettings";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import { Chat, Phone, VideoCall } from "@mui/icons-material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { motion } from "framer-motion";
import TransitionProvider from "@/components/TransitionProvider";

export default function Members() {
  const [alignment, setAlignment] = useState<string | null>("members");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const members = [
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      avatar: "/path/to/avatar.jpg",
    },
  ];

  return (
    <TransitionProvider>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 1 }}
      />
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
            Members
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100vw",
              alignItems: "center",
              position: "fixed",
              zIndex: 1000,
              right: 0,
              flexGrow: 1,
              pb: 0.5,
              left: 160,
            }}
          >
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="members" aria-label="members">
                <PeopleIcon />
              </ToggleButton>
              <ToggleButton value="introductions" aria-label="introductions">
                <AddReactionIcon />
              </ToggleButton>
            </ToggleButtonGroup>
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
          height: `${members.length * 200}px`,
          overflowY: "auto",
          border: "none",
          boxShadow: "none",
        }}
      >
        {alignment === "members" ? (
          <List
            sx={{
              width: "100vw",
            }}
          >
            {members.map((member, index) => (
              <>
                <ListItem component={motion.li} key={index}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt={member.name}
                      src={member.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ display: "inline", pl: 2 }}
                    primary={member.name}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {member.phoneNumber}
                        </Typography>
                        <Box
                          component={motion.div}
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <IconButton
                            component={motion.button}
                            sx={{
                              color: "#979bcb ",
                              position: "absolute",
                              top: 18,
                              right: 90,
                            }}
                          >
                            <Chat />
                          </IconButton>
                          <IconButton
                            component={motion.button}
                            color="primary"
                            sx={{
                              color: "#979bcb",
                              position: "absolute",
                              top: 18,
                              right: 50,
                            }}
                          >
                            <Phone />
                          </IconButton>
                          <IconButton
                            component={motion.button}
                            color="primary"
                            sx={{
                              color: "#979bcb",
                              position: "absolute",
                              top: 18,
                              right: 10,
                            }}
                          >
                            <VideoCall />
                          </IconButton>
                        </Box>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="middle" color="white" />
              </>
            ))}
          </List>
        ) : (
          <List
            sx={{
              width: "100vw",
            }}
          >
            {members.map((member, index) => (
              <>
                <ListItem component={motion.li} key={index}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt={member.name}
                      src={member.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ display: "inline", pl: 2 }}
                    primary={member.name}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {member.phoneNumber}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <IconButton
                            component={motion.button}
                            sx={{
                              color: "#979bcb ",
                              position: "absolute",
                              top: 18,
                              right: 20,
                            }}
                          >
                            <PersonAddIcon />
                          </IconButton>
                        </Box>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="middle" color="white" />{" "}
              </>
            ))}
          </List>
        )}

        <Box
          sx={{
            height: `${100}px`,
            overflowY: "auto",
            border: "none",
            boxShadow: "none",
          }}
        ></Box>
      </Box>
    </TransitionProvider>
  );
}
