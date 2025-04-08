import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography } from '@mui/material';
import { Heart } from 'lucide-react';
import styles from './ArtistsListItem.module.css';
import { isFavorite, toggleFavorite } from '../../utils/favoritesArtist';

const ArtistsListItem = ({ artist }) => {
  const {
    id,
    name,
    creationDate,
    image,
    members,
  } = artist;

  const [favorite, setFavorite] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [id]);

  const handleFavoriteClick = () => {
    const newState = toggleFavorite(id);
    setFavorite(newState);
    setSnackbarMessage(newState ? `${name} added to favorites` : `${name} removed from favorites`);
    setShowSnackbar(true);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.cardMediaWrapper}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className={styles.cardMediaImg}
        />
     </div>

      <div className={styles.cardAction}>
        <Typography variant='body1' sx={{fontSize:'1.5rem', fontWeight:'600', textAlign:'center'}}>
          {name}
        </Typography>
        <IconButton
            className={styles.favoriteIcon}
            onClick={handleFavoriteClick}
            size='small'
        >
          <Heart 
             color={favorite ? 'red' : 'black'}
             fill={favorite ? 'rgb(255,48,64)' : 'none'}
          />
        </IconButton>
      </div>

      <CardContent className={styles.infoOverlay}>
        <Typography variant="body2" gutterBottom>
          Creation: {creationDate}
        </Typography>
        <Typography variant="body2">
          Members: {members?.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtistsListItem;
