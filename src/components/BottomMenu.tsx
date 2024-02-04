"use client";

import { useState } from "react";

import Box  from "@mui/material/Box";
import Link from "next/link";
import LinkImageCentered from "./LinkImageCentered";

// icons
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';

import styles from "@/cssModules/BottomMenu.module.css";

export default function BottomMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuMouseOver = () =>
      {
        setOpen(true);
      }
  const handleMenuMouseOut = () =>
      {
        setOpen(false);
      }

 
  return (
    <Box sx={{  flexShrink: 0, py: 2, px: 3, textAlign: 'center', 

    }} className={styles.curvedContainer} >
      <nav>
        <ul style={{listStyleType: "none"}}>
          <li style={{ position: "absolute", top: "40%", left: "10%"}}>
              <LinkImageCentered href="/page1"><MarkAsUnreadOutlinedIcon></MarkAsUnreadOutlinedIcon></LinkImageCentered>
          </li>
          <li style={{ position: "absolute", top: "23%", left: "30%"}}>
              <LinkImageCentered href="/page2"><PeopleAltOutlinedIcon></PeopleAltOutlinedIcon></LinkImageCentered>
          </li>
          <li style={{ position: "absolute", top: "0px", left: "50%"}}>
              <LinkImageCentered href="/page3">
                <div style={{height: "60px", width: "60px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)"}}>
                  CA
                </div>
              </LinkImageCentered>
          </li>
          <li style={{ position: "absolute", top: "23%", left: "70%"}}>
              <LinkImageCentered href="/page4"><Diversity1OutlinedIcon></Diversity1OutlinedIcon></LinkImageCentered>
          </li>
          <li style={{ position: "absolute", top: "40%", left: "90%"}}>
              <LinkImageCentered href="/page5"><TodayOutlinedIcon></TodayOutlinedIcon></LinkImageCentered>
          </li>
          
          
          {/* <li style={{ position: "absolute", top: "25px", left: "30%", }}><Link  href="/page1">Page 1</Link></li>
          <li style={{ position: "absolute", top: "-15px", left: "50%", }}><Link  href="/page1">Page 1</Link></li>
          <li style={{ position: "absolute", top: "25px", left: "70%", }}><Link  href="/page1">Page 1</Link></li>
          <li style={{ position: "absolute", top: "50px", left: "90%", }}><Link  href="/page1">Page 1</Link></li> */}
        </ul>
      </nav>
    </Box>
                    
                    
  
  );
}
