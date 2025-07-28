import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e6e6fa", // Light violet (lavender)
        padding: "16px",
        borderBottom: "2px solid #b39ddb",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <MenuBookIcon fontSize="large" sx={{ color: "#7e57c2" }} />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#5e35b1", fontFamily: "serif" }}
        >
          My Notebook
        </Typography>
      </Stack>
    </Box>
  );
};

export default Header;


