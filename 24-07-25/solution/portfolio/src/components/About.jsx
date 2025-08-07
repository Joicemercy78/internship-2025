// src/components/About.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import avatar from "../assets/about-avatar.png";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#000",
        minHeight: "50vh",
        px: 4,
        py: 10,
      }}
    >
      {/* Section Title with Divider */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#a855f7" }} />
        <Typography
          variant="h4"
          sx={{
            color: "#a855f7",
            mx: 2,
            whiteSpace: "nowrap",
            fontWeight: "bold",
          }}
        >
          &lt; <span style={{ color: "white" }}>About Me </span> /&gt;
        </Typography>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#a855f7" }} />
      </Box>

      {/* Grid Content */}
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
      >
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={avatar}
              alt="About avatar"
              style={{
                width: "80%", // fill column better
                maxWidth: "400px",
                borderRadius: "20px",
              }}
            />
          </motion.div>
        </Grid>

        {/* Right Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={4}
              sx={{
                padding: 4,
                backgroundColor: "#000",
                color: "white",
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
                Hello! I'm <span style={{ color: "#a855f7" }}>Joice Mercy</span>,<br />
                A passionate full stack developer.<br />
                I love turning complex problems into simple, beautiful, and intuitive designs.<br />
                When I'm not coding, I enjoy learning new technologies, making crafts, and exploring creative ideas.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
