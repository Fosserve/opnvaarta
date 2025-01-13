import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ApplyCreator from "./pages/ApplyCreator";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4" style={{ paddingBottom: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/apply-creator" element={<ApplyCreator />} />
        </Routes>
      </div>
      <Box 
        component="footer" 
        sx={{ 
          textAlign: 'center', 
          padding: '2rem', 
          background: '#282c34', 
          color: '#ffffff', 
          position: 'static', 
          bottom: 0, 
          width: '100%' 
        }}
      >
        <Typography variant="body2">
          Opnvaarta is a project by FOSS Serve of FOSS Andhra Foundation
        </Typography>
      </Box>
    </Router>
  );
}

export default App;
