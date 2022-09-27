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
    <div>
    <Card sx={{ boxShadow: 10, marginRight: 5}}>
      <CardMedia
        component="img"
        height="300"
        image={e.image}
        alt="project landing page"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {e.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button><a href={e.link}>View Project</a></Button>
      </CardActions>
    </Card>
    <br></br>
    </div>
    
  );
    })
}