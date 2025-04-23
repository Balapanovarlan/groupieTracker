import React, { useState } from 'react'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { BookHeart, LogIn } from 'lucide-react'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import {Link as MuiLink} from '@mui/material'
import { PageRoutes } from '../../routes/PageRoutes'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {

  const {user, logout} = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (e)=>{
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    logout();
    handleMenuClose();
  }

  return (
    <div className={styles.wrapper}>
        <MuiLink to={PageRoutes.CommonRoutes.home} component={Link} underline='none' color='black'>
          <span className={styles.logo}>Groupie Tracker</span>
        </MuiLink>

        <Search/>
        
        <div className={styles.userBtns}>
          <MuiLink to={PageRoutes.FavoritesRoutes.favorites} component={Link}>
            <IconButton size='large'>
              <BookHeart/> 
            </IconButton>
          </MuiLink>
          
          { user? (
            <>
              <IconButton size='large' onClick={handleAvatarClick}>
                <Avatar src={user.picture} alt={user.name} />
              </IconButton>
              <Menu anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{vertical:'bottom', horizontal:'right'}}
                transformOrigin={{vertical: 'top', horizontal:'right'}}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ):(
            <MuiLink to = {PageRoutes.AuthRoutes.login} component={Link}>
              <IconButton size = 'large'>
                <LogIn/>
              </IconButton>
            </MuiLink>
          )

          }
        </div>
    </div>
  )
}

export default Header