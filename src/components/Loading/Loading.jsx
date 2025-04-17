import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 3 }}>
        <CircularProgress />
        <Typography variant="body1">
        Загрузка...
        </Typography>
    </Box>
  )
}

export default Loading