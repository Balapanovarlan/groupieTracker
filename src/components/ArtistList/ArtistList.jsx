import React from 'react'
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import { Box, CircularProgress, Typography } from '@mui/material';
import ArtistListItem from '../ArtistsListItem/ArtistsListItem';

const ArtistList = () => {
    const { data: artists, isLoading, isError } = useArtists();

    if (isLoading) {
        return (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 1 }}>
              Загрузка...
            </Typography>
          </Box>
        );
      }

    if (isError) {
        return (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="h6" color="error">
              Ошибка загрузки артистов
            </Typography>
          </Box>
        );
    }

    if (!artists || artists.length === 0) {
        return (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="h6">Нет доступных артистов</Typography>
          </Box>
        );
    }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 , justifyContent: 'center'}}>
        {artists.map((artist) => (
        <ArtistListItem key={artist.id} artist={artist} />
        ))}
    </Box>
)
}

export default ArtistList