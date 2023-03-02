import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';


const Sidebar = () => {
    return (
        <aside className="sidebar">
        <MenuIcon />
        
        <div className="sec-icons">
            <HomeOutlinedIcon />
            <EventNoteOutlinedIcon />
        </div>
        </aside>
    )
}

export default Sidebar;