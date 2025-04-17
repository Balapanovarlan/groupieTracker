import React from 'react'
import SliderOfLocations from '../SliderOfLocations/SliderOfLocations'
import styles from './ArtistCard.module.css'

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
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={artistName}
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{artistName}</h2>
          <p className={styles.field}>
            <strong>Creation:</strong> {creationDate}
          </p>
          <p className={styles.field}>
            <strong>First Album:</strong> {firstAlbum}
          </p>
          <p className={styles.field}>
            <strong>Members:</strong> {members?.join(', ')}
          </p>
        </div>
      </div>

      <SliderOfLocations
        locations={locations}
        dates={dates}
      />
    </div>
  )
}

export default ArtistCard
