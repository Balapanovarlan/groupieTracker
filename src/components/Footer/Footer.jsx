import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../../routes/PageRoutes'; 
import tgIcon from '../../assets/icons/tg.svg'
import github_Icon from '../../assets/icons/github_Icon.svg'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize:'1.5rem',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} MyGroupieTracker
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <MuiLink component={Link} to={PageRoutes.CommonRoutes.home} underline="hover">
          Home
        </MuiLink>
        <MuiLink component={Link} to={PageRoutes.FavoritesRoutes.favorites} underline="hover">
          Favorites
        </MuiLink>
      </Box>

      <MuiLink
        href = 'https://github.com/01-edu/public/tree/master/subjects/groupie-tracker'  
        target = '_blank'
      >
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:1.5
        }}>
          <Typography>
            API 
          </Typography>
          <img src={github_Icon} alt='github' width={20} height={20}/>
        </Box>
      </MuiLink>
      <Box sx = {{display: 'flex', alignItems: 'center', gap:2}}>
        <Typography variant="h6" color="text.secondary">
          Contact: @Arlandia
        </Typography>
        <MuiLink  
          href='https://t.me/Arlandia'
          target = '_blank'>
          <img src={tgIcon} alt="Telegram" width={20} height={20}/>
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
