import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import ArtistsListItem from '../../components/ArtistsListItem/ArtistsListItem';
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import { getFavorites } from '../../utils/favoritesArtist';

const Favorites = () => {
  const { data: artists = [], isLoading, isError } = useArtists();
  const favorites = getFavorites();

  const favoriteArtists = useMemo(() => {
    return artists.filter(artist => favorites.includes(artist.id));
  }, [artists, favorites]);

  if (isLoading) {
    return <Typography textAlign="center" mt={4}>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error" textAlign="center" mt={4}>Error loading artists.</Typography>;
  }

  if (favoriteArtists.length === 0) {
    return <Typography textAlign="center" mt={4}>You have no favorite artists yet.</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        mt: 2,
        justifyContent: 'center',
      }}
    >
      {favoriteArtists.map((artist) => (
        <ArtistsListItem key={artist.id} artist={artist} />
      ))}
    </Box>
  );
};

export default Favorites;
