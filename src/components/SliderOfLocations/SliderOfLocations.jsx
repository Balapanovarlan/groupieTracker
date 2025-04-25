import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MapCard from '../MapCard/MapCard'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import styles from './SliderOfLocations.module.css'
import { CalendarDays, MapPin } from 'lucide-react'

const SliderOfLocations = ({ locations = [], dates = [] }) => {
  const formatName = (str) =>
    str
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
      >
        {locations.map((locStr, index) => {
          const [cityRaw, countryRaw] = locStr.split('-')
          const city = formatName(cityRaw)
          const country = formatName(countryRaw)

          const rawDate = dates[index]
          const date = rawDate.replace(/^\*/, '')

          return (
            <SwiperSlide className={styles.slide} key={locStr + index}>
              <div className={styles.heading}>
                <div className={styles.dateContainer}>
                  <CalendarDays />
                  <span className={styles.date}>{date}</span>
                </div>
                <div className={styles.location}>
                  <MapPin />
                  <span>{city}, {country}</span>
                </div>
              </div>
              <MapCard city={city} country={country} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SliderOfLocations
