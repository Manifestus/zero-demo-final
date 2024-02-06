"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Link from "next/link";
import LinkImageCentered from "./LinkImageCentered";

// icons
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";

import styles from "@/cssModules/BottomMenu.module.css";

export default function BottomMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuMouseOver = () => {
    setOpen(true);
  };
  const handleMenuMouseOut = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 0, zIndex: 1000, width: "100vw" }}>
      <Box className={styles.bottomMenu_container}>
        <Box className={styles.bottomMenu_curvedDiv_container}>
          <Box
            sx={{ flexShrink: 0, py: 2, px: 3, textAlign: "center" }}
            className={styles.curvedDiv}
          ></Box>
        </Box>

        <Box className={styles.nav_container}>
          <nav>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ position: "absolute", top: "78%", left: "10%" }}>
                <LinkImageCentered href="/messaging">
                  <MarkAsUnreadOutlinedIcon sx={{color: "#323232"}}></MarkAsUnreadOutlinedIcon>
                </LinkImageCentered>
              </li>
              <li style={{ position: "absolute", top: "39%", left: "30%" }}>
                <LinkImageCentered href="/members">
                  <PeopleAltOutlinedIcon sx={{color: "#323232"}}></PeopleAltOutlinedIcon>
                </LinkImageCentered>
              </li>
              <li style={{ position: "absolute", top: "0px", left: "50%" }}>
                <LinkImageCentered href="/">
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255)",
                      textAlign: "center",
                      paddingTop: "0.2em",
                    }}
                  >
                    <img width={50} height={50} src="https://res.cloudinary.com/du7w5i2uh/image/upload/v1706895299/OAI_-_PLACEHOLDER_LOGO_-_V2_rztmgk.svg"/>
                  </div>
                </LinkImageCentered>
              </li>
              <li style={{ position: "absolute", top: "39%", left: "70%" }}>
                <LinkImageCentered href="/donation">
                  <Diversity1OutlinedIcon sx={{color: "#323232"}}></Diversity1OutlinedIcon>
                </LinkImageCentered>
              </li>
              <li style={{ position: "absolute", top: "78%", left: "90%" }}>
                <LinkImageCentered href="/calendar">
                  <TodayOutlinedIcon sx={{color: "#323232"}}></TodayOutlinedIcon>
                </LinkImageCentered>
              </li>

              {/* <li style={{ position: "absolute", top: "25px", left: "30%", }}><Link  href="/page1">Page 1</Link></li>
            <li style={{ position: "absolute", top: "-15px", left: "50%", }}><Link  href="/page1">Page 1</Link></li>
            <li style={{ position: "absolute", top: "25px", left: "70%", }}><Link  href="/page1">Page 1</Link></li>
            <li style={{ position: "absolute", top: "50px", left: "90%", }}><Link  href="/page1">Page 1</Link></li> */}
            </ul>
          </nav>
        </Box>
      </Box>
    </Box>
  );
}
