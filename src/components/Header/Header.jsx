import React, { useState } from 'react'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { BookHeart, LogIn, Moon, Sun } from 'lucide-react'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import {Link as MuiLink} from '@mui/material'
import { PageRoutes } from '../../routes/PageRoutes'
import { useAuth } from '../../contexts/AuthContext'
import { Menu as MenuIcon } from 'lucide-react'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useAppTheme } from '../../contexts/ThemeContext'


const Header = () => {

  const {user, logout} = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => () => setOpenDrawer(open);

  const {mode, toggleTheme} = useAppTheme();

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
console.log(mode);

  return (
    <div className={`${styles.wrapper} ${styles[mode]}`}>
        <MuiLink to={PageRoutes.CommonRoutes.home} component={Link} underline='none' color='black' className={styles.logoLink}>
          <span className={`${styles.logo} ${styles[mode]}`}>Groupie Tracker</span>
        </MuiLink>

        <Search className={styles.search__container}/>
        
        <div className={styles.userBtns}>
          <MuiLink to={PageRoutes.FavoritesRoutes.favorites} component={Link}>
            <IconButton size='large'>
              <BookHeart/> 
            </IconButton>
          </MuiLink>

          <IconButton onClick={toggleTheme}>
            {mode === 'light'? <Moon/> : <Sun/>}
          </IconButton>
          
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

        <div className={styles.menuBtn}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={PageRoutes.FavoritesRoutes.favorites} onClick={toggleDrawer(false)}>
                <ListItemIcon><BookHeart /></ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItemButton>
            </ListItem>
            {user ? (
              <ListItem disablePadding>
                <ListItemButton onClick={() => { logout(); toggleDrawer(false)(); }}>
                  <ListItemIcon><LogIn /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component={Link} to={PageRoutes.AuthRoutes.login} onClick={toggleDrawer(false)}>
                  <ListItemIcon><LogIn /></ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Drawer>

    </div>
  )
}

export default Header