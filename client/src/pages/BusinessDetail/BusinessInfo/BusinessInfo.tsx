import style from './BusinessInfo.module.css'
import FavoriteIconEmpty from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Fab, Tooltip } from '@mui/material'
import { useState } from 'react'
// import type { ServiceProvider } from '../../../interfaces'

interface DetailProps {
  sellerName: string
  rating?: any
}

const BusinessInfo: React.FC<DetailProps> = ({ sellerName, rating }: DetailProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const calculateAverageRating = (ratingArray: any[]): number | string => {
    if (ratingArray.length === 0) {
      return 'User does not have enough reviews'
    }

    const totalRating = ratingArray.reduce((accumulator, current) => accumulator + current.value, 0)
    const averageRating = totalRating / ratingArray.length
    return averageRating
  }

  const toggleFavorite = (): void => {
    setIsFavorite((prevState) => !prevState)
  }

  return (
    <div className={style['business-info-container']}>
      <div className={style['business-info']}>
        <h2 className={style.title}>{sellerName}</h2>
        <div className={style['rating-container']}>
          <StarIcon className={style.rating}></StarIcon>
          <p>{calculateAverageRating(rating || [])}</p>
        </div>
        {/* <p className={style.location}>{sellerdetail.sellerPhone}</p> */}
      </div>
      <div className={style.wrapper}>
        <Tooltip title='Must be logged in to add to favorites' placement='top'>
          <Fab className={style.fav} onClick={toggleFavorite}>
            {isFavorite ? <FavoriteIcon className={style['favorite-button-filled']} /> : <FavoriteIconEmpty className={style['favorite-button']} />}
          </Fab>
        </Tooltip>
      </div>
    </div>
  )
}

export default BusinessInfo
