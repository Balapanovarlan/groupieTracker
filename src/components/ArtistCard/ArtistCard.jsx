import { Box, Typography } from '@mui/material'
import React from 'react'

const ArtistCard = ({
  artistName,
  creationDate,
  firstAlbum,
  members,
  image,
}) => {
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center',
      padding:'2rem',
    }}>
      <Box sx={{ maxWidth: 500, width: '100%', mt: 4 }}>
      <img src={image} alt={artistName} style={{width:'100%', borderRadius: 8 }} />
      
      <Typography variant="h4" textAlign='center'>
        {artistName}
      </Typography>
      </Box>
      <Box>
      <Typography variant="body1" mt={2}>
        <strong>Creation:</strong> {creationDate}
      </Typography>
      <Typography variant="body1" mt={1}>
        <strong>First Album:</strong> {firstAlbum}
      </Typography>
      <Typography variant="body1" mt={1}>
        <strong>Members:</strong> {members?.join(', ')}
      </Typography>
      </Box>
    </Box>
  )
}

export default ArtistCard