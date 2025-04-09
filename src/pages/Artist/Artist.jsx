import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import { useArtistDetails } from '../../hooks/useArtistDetails/useArtistDetails';
import ArtistCard from '../../components/ArtistCard/ArtistCard';

const Artist = () => {
  const { id } = useParams();
  const { data: artistInfo, isLoading, isError } = useArtistDetails(id);
  

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

  if (isError || !artistInfo) {
    return (
      <Typography color="error" textAlign="center" mt={4}>
        Failed to load artist details.
      </Typography>
    );
  }

  return (
    <>
      <ArtistCard
        artistName = {artistInfo.artist.name}
        creationDate = {artistInfo.artist.creationDate}
        firstAlbum={artistInfo.artist.firstAlbum}
        members={artistInfo.artist.members}
        image={artistInfo.artist.image}
      />
    </>
  );
};

export default Artist;
