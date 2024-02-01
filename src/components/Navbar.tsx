"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const FullScreenDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(isOpen);
    };

  const list = () => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "transparent",
        paddingTop: "44px",
        backdropFilter: "blur(10px)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", height: "44px" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <FullScreenDrawer
        anchor={"top"}
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ elevation: 0 }}
      >
        {list()}
      </FullScreenDrawer>
    </div>
  );
}
