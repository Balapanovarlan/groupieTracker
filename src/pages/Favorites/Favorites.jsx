import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import ArtistsListItem from '../../components/ArtistsListItem/ArtistsListItem';
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import Loading from '../../components/Loading/Loading';
import styles from './Favorites.module.css';
import { getFavorites } from '../../utils/favoritesArtist';
import { useAuth } from '../../contexts/AuthContext';
import EmptyBanner from '../../components/EmptyBanner/EmptyBanner';
import noFavImg from '../../assets/icons/noFavImg.svg'

const Favorites = () => {
  const { data: artists = [], isLoading, isError } = useArtists();
  const { user } = useAuth();

  const favorites = user ? getFavorites(user.id) : [];

  const favoriteArtists = useMemo(
    () => artists.filter(artist => favorites.includes(artist.id)),
    [artists, favorites]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Typography color="error" textAlign="center" mt={4}>
        Error loading artists.
      </Typography>
    );
  }

  if (favoriteArtists.length === 0) {
    return (
      <EmptyBanner
        title="No favorites yet"
        description="You haven't added any artists to your favorites. Discover and add them now!"
        image={noFavImg}
        buttonText="Explore Artists"
        buttonLink="/"
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      {favoriteArtists.map(artist => (
        <ArtistsListItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default Favorites;