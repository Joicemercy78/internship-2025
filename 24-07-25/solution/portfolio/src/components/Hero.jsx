// src/components/Hero.jsx
import React from "react";
import { Box, Typography, Button, IconButton, Stack, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import profile from "../assets/profile.png"; // adjust path if needed

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000", // same as navbar
        color: "#fff",
        minHeight: "60vh",
        px: 4,
        py: 10,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-around">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Hi! My name is, <br/> <span style={{ color: "#a855f7", fontSize: "8rem", fontWeight:"bold" }}> Joice </span>
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            I’m a full stack developer.<br/> Excited to <span style={{ color: "#a855f7" }}>build </span> awesome websites and apps.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/joice-mercy/"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/Joicemercy78"
              target="_blank"
              sx={{ color: "white" }}
            >
              <GitHubIcon fontSize="large"/>
            </IconButton>
            <IconButton
              component="a"
              href="mailto:mercyjoice811@gmail.com"
              sx={{ color: "white" }}
            >
              <EmailIcon fontSize="large"/>
            </IconButton>
          </Stack>
        </Grid>

        {/* Right Section - Profile Image */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 10 }}
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 30px #a855f7",
              margin: "auto",
            }}
          >
            <img
              src={profile}
              alt="Joice"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
