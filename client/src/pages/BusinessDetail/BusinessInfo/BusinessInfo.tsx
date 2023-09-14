import style from './BusinessInfo.module.css'
import FavoriteIconEmpty from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Fab, Tooltip } from '@mui/material'
import { useState } from 'react'
import useRating from '../../../hooks/useRating'
// import type { ServiceProvider } from '../../../interfaces'
import type { ReviewsProps } from '../../../components/Reviews/Reviews'

interface DetailProps extends ReviewsProps {
  sellerName: string
}

const BusinessInfo: React.FC<DetailProps> = ({ sellerName, reviews }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const isAuth = localStorage.getItem('isAuth')

  const toggleFavorite = (): void => {
    setIsFavorite((prevState) => !prevState)
  }
  const averageRating = useRating(reviews)
  return (
    <div className={style['business-info-container']}>
      <div className={style['business-info']}>
        <h2 className={style.title}>{sellerName}</h2>
        <div className={style['rating-container']}>
          <StarIcon className={style.rating}></StarIcon>
          <p>{averageRating}</p>
        </div>
      </div>
      <div className={style.wrapper}>
        <Tooltip title={isAuth !== null ? 'Add to favourites' : 'Must be logged in to add to favourites'} placement='top'>
          <Fab className={style.fav} onClick={toggleFavorite}>
            {isFavorite ? <FavoriteIcon className={style['favorite-button-filled']} /> : <FavoriteIconEmpty className={style['favorite-button']} />}
          </Fab>
        </Tooltip>
      </div>
    </div>
  )
}

export default BusinessInfo
