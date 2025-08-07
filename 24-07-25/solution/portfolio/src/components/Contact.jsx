import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#000",
        px: 4,
        py: 10,
        minHeight: "50vh",
        color: "#fff",
      }}
    >
      {/* Section Heading */}
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
          &lt; <span style={{ color: "white" }}>Contact</span> /&gt;
        </Typography>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#a855f7" }} />
      </Box>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          margin="normal"
          sx={{
            input: {
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "8px",
            },
            label: {
            color: "#ccc",
            },
            }}
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          margin="normal"
          type="email"
          sx={{
            input: {
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: "8px",
            },
            label: {
            color: "#ccc",
            },
            }}
        />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          sx={{
            textarea: {
                backgroundColor: "#111",
                color: "#ccc",
                borderRadius: "8px",
            },
            label: {
            color: "#ccc",
            },
            }}
        />
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#a855f7",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1,
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: "#9333ea",
            },
          }}
        >
          Send Message
        </Button>
      </motion.form>
    </Box>
  );
};

export default Contact;
