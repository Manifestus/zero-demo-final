import Link from 'next/link';

import Box from '@mui/material/Box';

import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import classes from '@/cssModules/ProfileAndSettingsRow.module.css';

export default function ProfileAndSettingsRow() {

    return <>
        <Box 
            
            // className={classes.menu_container}
                
            sx={{   px: 5, py: 4, paddingBottom: 1,
                
                    display: "flex", flexDirection:"row", 
                    justifyContent: "space-between",
                }}
        >
            <Link href="/profile"><RecordVoiceOverOutlinedIcon></RecordVoiceOverOutlinedIcon></Link>
            <Link href="/settings"><SettingsOutlinedIcon></SettingsOutlinedIcon></Link>
        </Box>
    </>
}