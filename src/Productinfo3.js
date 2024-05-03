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
        image="capimg.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          50$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A cap: the crown of casual comfort, a stylish shield from the sun's
          embrace.
        </Typography>
      </CardContent>
    </Card>
  );
}
