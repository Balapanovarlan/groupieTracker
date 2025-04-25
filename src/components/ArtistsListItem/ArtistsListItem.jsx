import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography, Snackbar, Alert } from '@mui/material';
import { Heart } from 'lucide-react';
import styles from './ArtistsListItem.module.css';
import { isFavorite, toggleFavorite } from '../../utils/favoritesArtist';
import {Link as MuiLink} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ArtistsListItem = ({ artist }) => {
  const {id,name,creationDate,image,members,} = artist;

  const {user} = useAuth();

  const [favorite, setFavorite] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    if(!user){
      setFavorite(false);
      return;
    }
    setFavorite(isFavorite(user.id,id));
  }, [user, id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if(!user){
      setSnackbarMessage(`Please login to use favorites!`);
      setShowSnackbar(true);
      return;
    }
    const newState = toggleFavorite(user.id, id);
    setFavorite(newState);
    setSnackbarMessage(newState ? `${name} added to favorites` : `${name} removed from favorites`);
    setShowSnackbar(true);
  };

  return (
    <>
    
    <Card className={styles.card}>
      <MuiLink  component={Link} to={`/artist/${id}`} underline='none' color='color.default'  >
      <div className={styles.cardMediaWrapper} >
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
            onClick={(e)=>handleFavoriteClick(e)}
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
      </MuiLink>
    </Card>

    <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="info"
          sx={{ width: '100%' , fontSize:'1.5rem' , display:'flex', alignItems:'center'}}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ArtistsListItem;
