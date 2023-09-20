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
import { useNavigate } from 'react-router-dom'

const UserDetailFavoritesDelete = (): JSX.Element => {
  const navigate = useNavigate()
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [space, setSpace] = useState(0)
  const userdetail = useSelector((state: RootState) => state.userdetail)

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
          {userdetail.favorites !== undefined && userdetail.favorites[0]?.seller?.categoriesArray?.length > 0
            ? (<Swiper modules={[Pagination, A11y, Autoplay]} className={style.swiper} spaceBetween={space}
                slidesPerView={slidesPerView} pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
                {userdetail.favorites?.map(({ _id, seller }) => {
                  return (
                  <SwiperSlide key={_id} className={styles.swiperslide}>
                    <BusinessCard _id={seller?._id} sellerName={seller?.sellerName} categoriesArray={seller?.categoriesArray}
                    reviews={seller?.reviews} images={seller?.images} />
                  </SwiperSlide>
                  )
                })}
              </Swiper>)
            : (
            <div className={styles['no-favorites']}>
              <p>Don&apos;t have favorites yet</p>
              <button onClick={() => { navigate('/business') }}> Let&apos;s Explore </button>
            </div>
              )}
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
