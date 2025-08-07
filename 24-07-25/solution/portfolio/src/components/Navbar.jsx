
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        bgcolor: "#000", 
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        px: 4,
        py: 2,
        boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
      }}
    >
      {/* Logo */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Pacifico', cursive",
          color: "#d946ef",
          fontWeight: "bold",
        }}
      >
        Portfolio.
      </Typography>

      {/* Links */}
      <Box
        sx={{
          display: "flex",
          gap: 7,
          alignItems: "center",
          fontSize: "14px"
        }}
      >
        <a href="#about" style={linkStyle}>ABOUT</a>
        <a href="#skills" style={linkStyle}>SKILLS</a>
        <a href="#projects" style={linkStyle}>PROJECTS</a>
        <a href="#contact" style={linkStyle}>CONTACT</a>
      </Box>

      {/* Resume Button */}
      <Button
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid transparent",
          borderImage: "linear-gradient(to right, #ec4899, #8b5cf6) 1",
          borderRadius: "6px",
          textTransform: "none",
          fontWeight: "bold",
          px: 2.5,
          "&:hover": {
            background: "linear-gradient(to right, #ec4899, #8b5cf6)",
            color: "#000",
          },
        }}
        endIcon={<Download />}
        href="/Joice_Resume.pdf" 
        download
      >
        Resume
      </Button>
    </Box>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
};

export default Navbar;
