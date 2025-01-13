import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
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
