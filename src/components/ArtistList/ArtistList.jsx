import React, { useState } from 'react'
import { useArtists } from '../../hooks/UseArtists/UseArtists';
import { Box, CircularProgress, Pagination, Stack, Typography } from '@mui/material';
import ArtistListItem from '../ArtistsListItem/ArtistsListItem';
import styles  from './ArtistList.module.css'
import Loading from '../Loading/Loading';

const ArtistList = () => {
    const { data: artists, isLoading, isError } = useArtists();
    const [page, setPage] = useState(1);
    const LIMIT = 8;

    console.log(artists);
    

    
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
      
      const totalPages = Math.ceil(artists.length/LIMIT);
  
      const start = (page - 1) * LIMIT;
  
      const visible = artists.slice(start, start + LIMIT);
      
      return (
        <div className={styles.wrapper}>
      <div className={styles.list__container}>
          {visible.map((artist) => (
          <ArtistListItem key={artist.id} artist={artist} />
          ))}
      </div>
      <div>
        <Stack>
          <Pagination
            count={totalPages}
            page={page}
            size='large'
            onChange={(e, newPage)=> setPage(newPage)}
            color='primary'
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>
    </div>
)
}

export default ArtistList