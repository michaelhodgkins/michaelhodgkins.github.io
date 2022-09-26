import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from "./projects.json"
export default function ProjectCards() {
    return data.projects.map((e) => {
  return (
    <Card sx={{ maxWidth: 650, boxShadow: 10 }}>
      <CardMedia
        component="img"
        height="350"
        image="/images/Landing Page.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Simple page application using ReactJs to connect with others about upcoming festivals
        </Typography>
      </CardContent>
      <CardActions>
        <Button><a href='https://wobbly-festivals.netlify.app/'>View Project</a></Button>
      </CardActions>
    </Card>

    
  );
    })
}