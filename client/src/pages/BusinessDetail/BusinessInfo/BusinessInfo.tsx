import style from './BusinessInfo.module.css'
import FavoriteIconEmpty from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Fab, Tooltip } from '@mui/material'
import useRating from '../../../hooks/useRating'
import type { ReviewsProps } from '../../../components/Reviews/Reviews'
import { postFavourite, checkFavourite, removeFavourite, findFavId } from '../../../utils/index'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { useEffect, useState } from 'react'
import { getUserbyId } from '../../../redux/actions'

interface DetailProps extends ReviewsProps {
  sellerName: string
  sellerId: string | undefined
  favourites: any[]
}

const BusinessInfo: React.FC<DetailProps> = ({ sellerName, reviews, sellerId, favourites }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const isAuth = localStorage.getItem('isAuth')
  const role = localStorage.getItem('role')
  const userId = useSelector((state: RootState) => state.userdetail._id)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth === 'true' && role === 'customer' && favourites !== undefined && favourites.length > 0) {
      const isSellerFavourite = checkFavourite(favourites, sellerId)
      const isFavoriteInStorage = localStorage.getItem(`favorite_${sellerId}`)
      setIsFavorite(isSellerFavourite || isFavoriteInStorage === 'true')
    }
  }, [isAuth, role, favourites, sellerId])

  const handleFavClick = async (): Promise<void> => {
    if (isAuth === 'true' && role === 'customer') {
      if (isFavorite) {
        const favId = await findFavId(favourites, sellerId)
        await removeFavourite(favId)
        setIsFavorite(false)
        localStorage.removeItem(`favorite_${sellerId}`)
      } else {
        await postFavourite(userId, sellerId)
        setIsFavorite(true)
        localStorage.setItem(`favorite_${sellerId}`, 'true')
        dispatch(getUserbyId(userId))
      }
    } else {
      navigate('/login')
    }
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
        <Tooltip title={isAuth === 'true' && role === 'customer' ? (isFavorite ? 'Remove from favorites' : 'Add to favorites') : 'Must be logged in to add to favorites'} placement='top'>
          <Fab className={style.fav} onClick={handleFavClick}>
            {isFavorite ? <FavoriteIcon className={style['favorite-button-filled']} /> : <FavoriteIconEmpty className={style['favorite-button']} />}
          </Fab>
        </Tooltip>
      </div>
    </div>
  )
}

export default BusinessInfo
