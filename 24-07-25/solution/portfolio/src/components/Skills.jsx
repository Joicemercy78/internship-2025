import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiMysql,
  SiVite,
  SiNpm,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 size={80} color="#e44d26" /> },
  { name: "CSS", icon: <SiCss3 size={80} color="#1572b6" /> },
  { name: "JavaScript", icon: <SiJavascript size={80} color="#f7df1e" /> },
  { name: "React", icon: <SiReact size={80} color="#61dafb" /> },
  { name: "Git", icon: <SiGit size={80} color="#f05032" /> },
  { name: "GitHub", icon: <SiGithub size={80} color="white" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={80} color="#7952b3" /> },
  { name: "MySQL", icon: <SiMysql size={80} color="#00758f" /> },
  { name: "Vite", icon: <SiVite size={80} color="#646cff" /> },
  { name: "npm", icon: <SiNpm size={80} color="#cb0000" /> },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        backgroundColor: "#000",
        minHeight: "50vh",
        px: 4,
        py: 10,
        textAlign: "center",
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
          &lt; <span style={{ color: "white" }}>Tech Stack</span> /&gt;
        </Typography>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#a855f7" }} />
      </Box>

      {/* Skills Grid */}
      <Grid container spacing={30} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Box sx={{ color: "white" }}>
                {skill.icon}
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
