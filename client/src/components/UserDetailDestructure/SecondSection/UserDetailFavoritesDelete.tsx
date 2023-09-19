import styles from '../UserDetailDestructure.module.css'
// components
import { useSelector } from 'react-redux'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
// assets
import type { RootState } from '../../../redux/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import BusinessCard from '../../BusinessCard/BusinessCard'
import { useEffect, useState } from 'react'
import style from '../../Carousel/Carousel.module.css'

const UserDetailFavoritesDelete = (): JSX.Element => {
  const { allServices } = useSelector((state: RootState) => state)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [space, setSpace] = useState(0)

  const updateSlidesPerView = (): void => {
    const width = window.innerWidth
    if (width < 1000) {
      setSlidesPerView(1)
      setSpace(150)
    } else if (width > 1000 && width < 1200) {
      setSlidesPerView(2)
      setSpace(50)
    } else if (width > 1200 && width < 1800) {
      setSlidesPerView(1)
      setSpace(100)
    } else if (width > 1800 && width < 2550) {
      setSlidesPerView(2)
      setSpace(50)
    } else if (width > 2550) {
      setSlidesPerView(3)
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
    <>
      <div className={styles['right-favorites']}>
        <div className={styles['favorites-header']}>
          <h4>Favorite Services</h4>
          <p>Services you&apos;ve liked</p>
        </div>
        <div className={styles['favorites-body']}>
          <Swiper modules={[Pagination, A11y, Autoplay]} className={style.swiper} spaceBetween={space}
          slidesPerView={slidesPerView} pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
            {allServices.map(({ _id, sellerName, categoriesArray, reviews, images }) => {
              return (
                <SwiperSlide key={_id} className={styles.swiperslide}>
                  <BusinessCard _id={_id} sellerName={sellerName} categoriesArray={categoriesArray} reviews={reviews} images={images} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      <div className={styles['right-delete']}>
        <div className={styles['delete-header']}>
          <h4>Delete Account</h4>
          <p>Are you sure you want to delete this account?</p>
        </div>
        <div className={styles['delete-body']}>
          <a href=''>Delete Account</a>
        </div>
      </div>
    </>
  )
}

export default UserDetailFavoritesDelete
