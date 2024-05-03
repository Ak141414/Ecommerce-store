import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="watchimg.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          5000$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time's eternal whisper, wrapped in the ticking embrace of a watch.
        </Typography>
      </CardContent>
    </Card>
  );
}
