
import React, { useState } from 'react'
import SliderOfLocations from '../SliderOfLocations/SliderOfLocations'
import styles from './ArtistCard.module.css'
import { useAppTheme } from '../../contexts/ThemeContext'

const ArtistCard = ({
  artistName,
  creationDate,
  firstAlbum,
  members = [],
  image,
  locations,
  dates,
}) => {

  const {mode} = useAppTheme();

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.info} ${styles[mode]}`}>
        <div className={styles.imageContainer}>
          <img src={image} alt={artistName} className={styles.image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{artistName}</h2>
          <p className={styles.field}>
            <strong>Creation:</strong> {creationDate}
          </p>
          <p className={styles.field}>
            <strong>First Album:</strong> {firstAlbum}
          </p>
          <div className={styles.field}>
            <strong>Members:</strong> {members.length}{' '}
          </div>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <SliderOfLocations locations={locations} dates={dates} />
      </div>

    </div>
  )
}

export default ArtistCard
