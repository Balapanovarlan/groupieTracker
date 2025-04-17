import { Box, Typography } from '@mui/material'
import React from 'react'
import MapCard from '../MapCard/MapCard'
import SliderOfLocations from '../SliderOfLocations/SliderOfLocations'

const ArtistCard = ({
  artistName,
  creationDate,
  firstAlbum,
  members,
  image,
  locations,
  dates,
}) => {
  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
      padding:'2rem',
      overflow:'visible'
    }}>
      <div style={{display:'flex', flexDirection:'column'}}>
        <Box sx={{ display:'flex', justifyContent: 'center',maxWidth: 500, width: '100%', mt: 4 }}>
        <img src={image} alt={artistName} style={{width:'50%', borderRadius: 8 }} />
        </Box>
        <Box sx={{width: '50%'}}>
        <Typography variant="h4" >
          {artistName}
        </Typography>
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
      </div>
      <SliderOfLocations 
        locations = {locations}
        dates = {dates}
      />
    </Box>
  )
}

export default ArtistCard