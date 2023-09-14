import styles from '../UserDetailDestructure.module.css'
// components
import Carousel from '../../../components/Carousel/Carousel'
import { useSelector } from 'react-redux'
// assets
import type { RootState } from '../../../redux/types'

const UserDetailFavoritesDelete = (): JSX.Element => {
  const { allServices } = useSelector((state: RootState) => state)
  return (
    <>
      <div className={styles['right-favorites']}>
        <div className={styles['favorites-header']}>
          <h4>Favorite Services</h4>
          <p>Services you&apos;ve liked</p>
        </div>
        <div className={styles['favorites-body']}>
          <Carousel cardstoshow={allServices} carouselName='' />
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
