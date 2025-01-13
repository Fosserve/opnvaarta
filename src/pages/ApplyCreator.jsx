import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ApplyCreator = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Apply to Become a Content Creator
      </Typography>
      <form>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            required
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
