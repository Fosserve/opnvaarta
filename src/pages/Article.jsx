import React from "react";
import { useParams } from "react-router-dom";
import SuggestedTopics from "../components/SuggestedTopics";
import CommentSection from "../components/CommentSection";
import { Typography, Box } from "@mui/material";

const Article = () => {
  const { id } = useParams();

  const article = {
    id,
    title: "Understanding AI Ethics",
    content: "Artificial intelligence is transforming industries...",
    topics: ["AI", "Ethics", "Technology"],
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {article.content}
      </Typography>
      <SuggestedTopics topics={article.topics} />
      <CommentSection articleId={id} />
    </Box>
  );
};

export default Article;
