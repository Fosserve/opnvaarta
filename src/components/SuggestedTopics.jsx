import React from "react";
import { Chip, Box, Typography } from "@mui/material";

const SuggestedTopics = ({ topics }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Suggested Topics
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {topics.map((topic, index) => (
          <Chip key={index} label={topic} color="primary" />
        ))}
      </Box>
    </Box>
  );
};

export default SuggestedTopics;
