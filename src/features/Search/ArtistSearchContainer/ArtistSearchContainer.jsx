// src/features/Search/ArtistSearchContainer.jsx
import React, { useMemo } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import ArtistsListItem from '../../../components/ArtistsListItem/ArtistsListItem';
import { useLocation } from 'react-router-dom';
import { useArtists } from '../../../hooks/UseArtists/UseArtists';
import { SearchX } from 'lucide-react';

const ArtistSearchContainer = () => {
  const { data: artists = [], isLoading, isError } = useArtists();
  const location = useLocation();

  // Получаем параметр "query" из URL, например: /search?query=Queen
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q') || '';

  // Фильтрация артистов на клиенте (оптимизировано через useMemo)
  const filteredArtists = useMemo(() => {
    if (!searchTerm) return artists;
    const lowerCaseTerm = searchTerm.toLowerCase();
    return artists.filter((artist) =>
      artist.name.toLowerCase().includes(lowerCaseTerm)
    );
  }, [artists, searchTerm]);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 1 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="h6" color="error">
          Error of fetching Artists
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>

    {filteredArtists.length === 0 ? (
      <Typography variant="body2" sx={{ 
        textAlign: 'center', 
        mt: 4, 
        fontSize:'1.5rem' , 
        display:'flex',
        justifyContent: 'center',
        }}>
        No results found for your search"{searchTerm}"
        <SearchX/>
      </Typography>
    ) : (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mt: 2,
          justifyContent: 'center',
        }}
      >
        {filteredArtists.map((artist) => (
          <ArtistsListItem key={artist.id} artist={artist} />
        ))}
      </Box>
    )}
  </Box>
  );
};

export default ArtistSearchContainer;
