import React from 'react'
import styles from './PageLayout.module.css'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const PageLayout = () => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <main className={styles.main}>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default PageLayout