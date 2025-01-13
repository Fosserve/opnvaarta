import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card sx={{ mb: 2, maxWidth: 360, height:190, overflow: 'hidden',justifyContent:'space-between',display:'flex',flexDirection:'column'  }}>
      <CardContent sx={{justifyContent:'space-between',display:'flex',flexDirection:'column'}}>
        <Typography variant="h6" gutterBottom>
        {article.title.substring(0, 50)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.content.substring(0, 80)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/article/${article._id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
