import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, TextField, Button, List, ListItem, ListItemText, Container } from "@mui/material";
import { api_url } from "../api/articles";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`${api_url}/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    };
    fetchArticle();
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    const response = await fetch(`${api_url}/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newComment }),
    });
    const updatedArticle = await response.json();
    setArticle(updatedArticle);
    setNewComment("");
  };

  if (!article) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>{article.title}</Typography>
      <Typography variant="body1" paragraph>{article.content}</Typography>

      <Typography variant="h5" gutterBottom>Comments</Typography>
      <List>
        {article.comments.map((comment, index) => (
          <ListItem key={index}>
            <ListItemText primary={comment.content} secondary={new Date(comment.createdAt).toLocaleString()} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2 }}>
        <TextField
          label="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          fullWidth
          multiline
          rows={2}
        />
        <Button variant="contained" onClick={handleCommentSubmit} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Article;
