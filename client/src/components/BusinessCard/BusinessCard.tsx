import useRating from '../../hooks/useRating'
import type { Category, ReviewRating } from '../../interfaces'
import StandardButton from '../StandardButton/StandardButton'
import style from './BusinessCard.module.css'
import { NavLink } from 'react-router-dom'

interface BusinessCardProps {
  _id: string
  sellerName: string
  reviews: ReviewRating[]
  categoriesArray: Category[]
  images: string[]
}

const BusinessCard: React.FC<BusinessCardProps> = ({ _id, sellerName, reviews, categoriesArray, images }) => {
  const averageRating = useRating(reviews)
  return (
    <article className={style.card}>
      <div className={style.imageContainer}>{images !== undefined && images.length > 0 ? <img className={style.image} src={images[0]} alt='sellerImage' /> : <p>No image available</p>}</div>
      <div className={style.titleContainer}>
        <h2 className={style.title}> {sellerName}</h2>
      </div>
      <div className={style.itemsContainer}>
        <p>Rating: {typeof averageRating === 'number' && averageRating.toFixed(2)}</p>
        {Array.isArray(categoriesArray) ? categoriesArray.map((category: Category, index: number) => <p key={index}>{category.name}</p>) : null}
      </div>
      <NavLink to={`/sellerdetail/${_id}`} className={style.link}>
        <StandardButton variant='sizeCards'>Check it out</StandardButton>
      </NavLink>
    </article>
  )
}

export default BusinessCard
