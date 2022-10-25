import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card id={movie.uuid} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={movie.image_url}
        alt="Movie poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <br /> 
          <Typography component="div">
            Categories:
          </Typography>
          {movie.categories.map((todo, index) => {
              return (
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  - {todo}
                </Typography>
              );
          })}
          <br />
          <Typography component="div">
            <Link 
              to='/detail'
              state={{
                title: movie.title,
                image: movie.image_url,
                categories: movie.categories,
                description: movie.description
              }}
            >
              Open Detail
            </Link>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;