import React from 'react'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { BookHeart } from 'lucide-react'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import {Link as MuiLink} from '@mui/material'
import { PageRoutes } from '../../routes/PageRoutes'

const Header = () => {
  return (
    <div className={styles.wrapper}>
        <MuiLink to={PageRoutes.CommonRoutes.home} component={Link} underline='none' color='black'>
          <span className={styles.logo}>Groupie Tracker</span>
        </MuiLink>
        <Search/>
        <MuiLink to={PageRoutes.FavoritesRoutes.favorites} component={Link}>
          <IconButton size='large'>
            <BookHeart/> 
          </IconButton>
        </MuiLink>
    </div>
  )
}

export default Header