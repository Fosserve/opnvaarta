import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar color="success" position="static">
      <Toolbar>
        <Typography component={Link} to='/'  variant="h6" sx={{ flexGrow: 1,textDecoration:'none',color:"white" }}>
         OpnVaarta
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/apply-creator">
            Become a Creator
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
