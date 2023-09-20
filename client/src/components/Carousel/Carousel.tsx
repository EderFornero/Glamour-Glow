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
  const [space, setSpace] = useState(0)

  const updateSlidesPerView = (): void => {
    const width = window.innerWidth
    if (width < 1000) {
      setSlidesPerView(1)
      setSpace(50)
    } else if (width > 1000 && width < 1550) {
      setSlidesPerView(2)
      setSpace(0)
    } else if (width > 1550 && width < 2000) {
      setSlidesPerView(3)
      setSpace(0)
    } else if (width > 2000 && width < 2600) {
      setSlidesPerView(4)
      setSpace(0)
    } else if (width > 2550) {
      setSlidesPerView(5)
      setSpace(50)
    }
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
      <Swiper modules={[Pagination, A11y, Autoplay]} className={styles.swiper} spaceBetween={space} slidesPerView={slidesPerView} pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
        {cardstoshow.map(({ _id, sellerName, categoriesArray, reviews, images, isActive }: ServiceProvider) => {
          return (
            <SwiperSlide key={_id} className={styles.swiperslide}>
              <div className={styles.container}>
                <BusinessCard _id={_id} sellerName={sellerName} categoriesArray={categoriesArray} reviews={reviews} images={images} isActive={isActive} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Carousel
