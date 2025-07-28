import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import salaryImg from "../assets/salaryprediction.png";
import tourismImg from "../assets/tourism.png";

const Projects = () => {
  const projects = [
    {
      image: salaryImg,
      title: "Salary Prediction",
      domain: "Artificial Intelligence",
      description:
        "A machine learning project that predicts salary based on experience and skills using regression models. Built with Python using libraries such as NumPy and Pandas.",
    },
    {
      image: tourismImg,
      title: "Tourism Website",
      domain: "Web Application",
      description:
        "A tourism website showcasing top destinations with chatbot integration using Dialogflow and Google Maps API for interactive experience.",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#000",
        minHeight: "80vh",
        px: { xs: 2, sm: 4 },
        py: 10,
      }}
    >
      {/* Section Title */}
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
          &lt; <span style={{ color: "white" }}>Projects</span> /&gt;
        </Typography>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#a855f7" }} />
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#111",
                  color: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: 600, 
                }}
              >
                <Box>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover", 
                      display: "block",
                    }}
                  />
                </Box>
                <Box sx={{ p: 5 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#a855f7", fontWeight: "bold", mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 500, mb: 1, color: "#ccc" }}
                  >
                    Domain: {project.domain}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
