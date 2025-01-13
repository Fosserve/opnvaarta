import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.content.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/article/${article.id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
