import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography, Container } from "@mui/material";
import ArticleCard from "../components/ArticleCard";

const articles = [
  {
    id: 1,
    title: "Andhra Pradesh Budget 2023 Highlights",
    content: "The Andhra Pradesh government has announced its budget for 2023...",
    topics: ["Andhra Pradesh", "Budget", "Economy"],
  },
  {
    id: 2,
    title: "New Infrastructure Projects in Andhra Pradesh",
    content: "Several new infrastructure projects have been launched in Andhra Pradesh...",
    topics: ["Infrastructure", "Development", "Andhra Pradesh"],
  },
  {
    id: 3,
    title: "Andhra Pradesh's Push for Renewable Energy",
    content: "The state is making significant strides in renewable energy...",
    topics: ["Renewable Energy", "Environment", "Andhra Pradesh"],
  },
  {
    id: 4,
    title: "Education Reforms in Andhra Pradesh",
    content: "The government has introduced new reforms in the education sector...",
    topics: ["Education", "Reforms", "Andhra Pradesh"],
  },
  {
    id: 5,
    title: "Healthcare Initiatives in Andhra Pradesh",
    content: "New healthcare initiatives are being implemented across the state...",
    topics: ["Healthcare", "Initiatives", "Andhra Pradesh"],
  },
  {
    id: 6,
    title: "Tourism Development in Andhra Pradesh",
    content: "Efforts are underway to boost tourism in Andhra Pradesh...",
    topics: ["Tourism", "Development", "Andhra Pradesh"],
  },
  {
    id: 7,
    title: "Agricultural Advancements in Andhra Pradesh",
    content: "Farmers in Andhra Pradesh are adopting new technologies...",
    topics: ["Agriculture", "Technology", "Andhra Pradesh"],
  },
  {
    id: 8,
    title: "Andhra Pradesh's IT Sector Growth",
    content: "The IT sector in Andhra Pradesh is experiencing rapid growth...",
    topics: ["IT Sector", "Growth", "Andhra Pradesh"],
  },
  {
    id: 9,
    title: "Cultural Festivals in Andhra Pradesh",
    content: "The state is celebrating its rich cultural heritage through various festivals...",
    topics: ["Culture", "Festivals", "Andhra Pradesh"],
  },
  {
    id: 10,
    title: "Andhra Pradesh's Role in National Politics",
    content: "The state is playing a significant role in national politics...",
    topics: ["Politics", "National", "Andhra Pradesh"],
  },
  {
    id: 11,
    title: "Sports Achievements in Andhra Pradesh",
    content: "Athletes from Andhra Pradesh are making their mark in various sports...",
    topics: ["Sports", "Achievements", "Andhra Pradesh"],
  },
  {
    id: 12,
    title: "Andhra Pradesh's Efforts in Digital Transformation",
    content: "The state is embracing digital transformation across various sectors...",
    topics: ["Digital Transformation", "Technology", "Andhra Pradesh"],
  },
];

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Latest News in Andhra Pradesh
      </Typography>
      <Grid2 container spacing={4}>
        {articles.map((article) => (
          <Grid2 xs={12} sm={6} md={4}  key={article.id} sx={{ display: 'flex' }}>
            <ArticleCard article={article} sx={{ flex: 1 }} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;
