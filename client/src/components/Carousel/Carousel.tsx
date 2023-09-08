import type { ServiceProvider } from '../../interfaces'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import styles from './Carousel.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import BusinessCard from '../BusinessCard/BusinessCard'
import { useEffect, useState } from 'react'

interface CarouselProps {
  cardstoshow: ServiceProvider[]
  carouselName: string
}

const Carousel: React.FC<CarouselProps> = ({ cardstoshow, carouselName }) => {
  const [slidesPerView, setSlidesPerView] = useState(4)
  const calculateRating = (reviews: any): number => {
    const totalRating = reviews.reduce((accumulator: number, current: any) => {
      return accumulator + current.review
    }, 0)

    const averageRating = totalRating / reviews.length
    return averageRating
  }
  const updateSlidesPerView = (): void => {
    const width = window.innerWidth

    setSlidesPerView(width < 2000 ? (width < 1400 ? (width < 1000 ? 1 : 2) : 3) : 4)
  }

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => {
      window.removeEventListener('resize', updateSlidesPerView)
    }
  }, [])

  return (
    <section className={styles.carousel}>
      <h3 className={styles.title}>{carouselName}</h3>
      <Swiper modules={[Pagination, A11y, Autoplay]} className={styles.swiper} spaceBetween={160} slidesPerView={slidesPerView} pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
        {cardstoshow.map(({ _id, sellerName, categoriesArray, servicesArray, reviews }: ServiceProvider) => {
          return (
            <SwiperSlide key={_id} className={styles.swiperslide}>
             <BusinessCard _id={_id} sellerName={sellerName} reviews={reviews.length > 0 && calculateRating(reviews)} categoriesArray={categoriesArray} servicesArray={servicesArray} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Carousel
