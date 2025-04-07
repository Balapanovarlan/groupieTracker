import React from 'react'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { BookHeart } from 'lucide-react'
import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className={styles.wrapper}>
        <Link to={'/'} className={styles.homeLink}>
          <span className={styles.logo}>Groupie Tracker</span>
        </Link>
        <Search/>
        <Link to={'/favorites'}>
          <IconButton size='large'>
            <BookHeart/> 
          </IconButton>
        </Link>
    </div>
  )
}

export default Header