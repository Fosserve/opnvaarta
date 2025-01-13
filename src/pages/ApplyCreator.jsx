import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios"; // Import axios
import { api_url } from "../api/articles"; // Import the API URL

const ApplyCreator = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${api_url}/creator`, {
        name,
        reason,
      });
      console.log("Application submitted:", response.data);
      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Apply to Become a Content Creator
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Why do you want to become a content creator?"
            multiline
            rows={4}
            variant="outlined"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit Application
        </Button>
      </form>
    </Box>
  );
};

export default ApplyCreator;
