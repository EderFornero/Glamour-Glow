import style from './BusinessInfo.module.css'
import FavoriteIconEmpty from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Fab, Tooltip } from '@mui/material'
import { useState } from 'react'

const BusinessInfo = ({ sellerdetail }: any): JSX.Element => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const toggleFavorite = (): void => {
    setIsFavorite((prevState) => !prevState)
  }

  return (
        <div className={style['business-info-container']}>
            <div className={style['business-info']}>
                <h2 className={style.title}>{sellerdetail.seller_name}</h2>
                <div className={style['rating-container']}>

                    <StarIcon className={style.rating}></StarIcon>
                    <p>{sellerdetail.seller_email}</p>
                </div>
                <p className={style.location}>{sellerdetail.seller_phone}</p>
            </div>
            <div className={style.wrapper}>
                <Tooltip title='Must be logged in to add to favorites' placement='top'>
                    <Fab className={style.fav} onClick={toggleFavorite}>
                        {isFavorite
                          ? (<FavoriteIcon className={style['favorite-button-filled']} />)
                          : (<FavoriteIconEmpty className={style['favorite-button']} />)}
                    </Fab>
                </Tooltip>
            </div>
        </div>
  )
}

export default BusinessInfo
