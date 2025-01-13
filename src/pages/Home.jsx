import React, { useState, useEffect } from "react";
import { Grid, Typography, Container, Tabs, Tab, Box, CircularProgress } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import axios from "axios"; // Import axios
import { api_url } from "../api/articles";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${api_url}/articles`); // Use axios to fetch data
        const data = response.data; // Access data from the response

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((article) => article.category)),
        ];

        setArticles(data);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredArticles =
    selectedTab === 0
      ? articles
      : articles.filter((article) => article.category === categories[selectedTab]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        News simplified for you........
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="article categories"
        sx={{ mb: 4 }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>
      <Grid container spacing={4}>
        {filteredArticles.map((article) => (
          <Grid 
            item
            xs={12} // Full-width on extra small screens
            sm={6} // Two cards per row on small screens
            md={4} // Three cards per row on medium screens
            key={article._id}
            sx={{ maxWidth: '100%', minHeight: '100%', overflow: 'hidden' }} // Fixed size for all articles
          >
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
