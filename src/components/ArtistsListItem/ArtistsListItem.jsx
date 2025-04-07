// src/components/ArtistsListItem.jsx

import React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography } from '@mui/material';
import { Heart } from 'lucide-react';
import styles from './ArtistsListItem.module.css';

const ArtistsListItem = ({ artist }) => {
  const {
    name,
    creationDate,
    image,
    members,
  } = artist;

  const handleFavoriteClick = () => {
    // Здесь будет логика добавления в избранное
    console.log(`Добавляем/удаляем из избранного: ${name}`);
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
          <Heart />
        </IconButton>
      </div>

      {/* Блок, который всплывает при hover */}
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
