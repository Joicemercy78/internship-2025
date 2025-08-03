
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {AppBar, Toolbar, Typography, IconButton} from '@mui/material';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }  }>
      <Toolbar>
        <IconButton
          edge="start"
          color="black"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <MenuBookIcon fontSize="large" sx={{ color: "black" }} />
        <Typography variant="h4" component="div" 
        sx={{ 
          flexGrow: 1,
          color: "black",
          ml: 3
           }}>
          My Notebook
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;






