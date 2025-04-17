import React from 'react'
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import { Box, CircularProgress, Typography } from '@mui/material';
import ArtistListItem from '../ArtistsListItem/ArtistsListItem';
import styles  from './ArtistList.module.css'
import Loading from '../Loading/Loading';

const ArtistList = () => {
    const { data: artists, isLoading, isError } = useArtists();

    if (isLoading) {
        return (
            <Loading/>
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
    <div className={styles.wrapper}>
        {artists.map((artist) => (
        <ArtistListItem key={artist.id} artist={artist} />
        ))}
    </div>
)
}

export default ArtistList