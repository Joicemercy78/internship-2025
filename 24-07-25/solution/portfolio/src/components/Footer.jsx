import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#8a42f5",
        color: "#fff",
        textAlign: "center",
        py: 4,
        mt: 4,
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={3} mb={2}>
        <IconButton
          href="https://github.com/Joicemercy78"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.2)", color: "#a855f7" },
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/joice-mercy/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.2)", color: "#a855f7" },
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="mailto:mercyjoice811@gmail.com"
          sx={{
            color: "#fff",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.2)", color: "#a855f7" },
          }}
        >
          <Email />
        </IconButton>
      </Stack>

      <Typography
        variant="body2"
        sx={{ color: "#aaa", fontSize: "0.85rem", mb: 0.5 }}
      >
        Designed & Built by Joice Mercy 💻
      </Typography>

      <Typography variant="body2" sx={{ color: "#fff", fontSize: "0.75rem" }}>
        © 2025 Joice Mercy. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
