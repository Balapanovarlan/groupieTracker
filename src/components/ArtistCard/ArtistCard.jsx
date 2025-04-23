
import React, { useState } from 'react'
import SliderOfLocations from '../SliderOfLocations/SliderOfLocations'
import styles from './ArtistCard.module.css'

const ArtistCard = ({
  artistName,
  creationDate,
  firstAlbum,
  members = [],
  image,
  locations,
  dates,
}) => {
  const [isListOpen, setIsListOpen] = useState(false)

  const toggleList = () => {
    setIsListOpen(prev => !prev)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
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

      {isListOpen && (
        <ul className={styles.listContainer}>
          {members.map(member => (
            <li key={member} className={styles.listItem}>
              {member}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ArtistCard
