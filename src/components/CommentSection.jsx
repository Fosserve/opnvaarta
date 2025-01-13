import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { api_url } from "../api/articles";

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${api_url}/articles/${articleId}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [articleId]);

  const addComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await fetch(`${api_url}/articles/${articleId}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment: newComment }),
        });
        if (!response.ok) {
          throw new Error('Failed to add comment');
        }
        const data = await response.json();
        setComments([...comments, data]);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <Box>
        {comments.map((comment, index) => (
          <Typography key={index} variant="body2" sx={{ mb: 1 }}>
            {comment}
          </Typography>
        ))}
      </Box>
      <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
        <TextField
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          label="Add a comment..."
          fullWidth
        />
        <Button variant="contained" onClick={addComment}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CommentSection;
