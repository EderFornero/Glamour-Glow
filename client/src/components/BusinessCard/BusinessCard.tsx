import useRating from '../../hooks/useRating'
import type { Category, ReviewRating } from '../../interfaces'
import style from './BusinessCard.module.css'
import { NavLink } from 'react-router-dom'

interface BusinessCardProps {
  _id: string
  sellerName: string
  reviews: ReviewRating[]
  categoriesArray: Category[]
  images: string[]
}

const BusinessCard: React.FC<BusinessCardProps> = ({ _id, sellerName, reviews, categoriesArray,  images}) => {
  const averageRating = useRating(reviews)
  return (
    <article className={style.card}>
      <div className={style.imageContainer}>
        {<img  className={style.image} src={images[0]} alt="sellerImage" />}
      </div>
      <div className={style.titleContainer}>
        <h2 className={style.title}> {sellerName}</h2>
      </div>
      <div className={style.itemsContainer}>
        
        <p>Rating: {averageRating}</p>
        <div className={style.categories}>
          {Array.isArray(categoriesArray) ? categoriesArray.map((category: Category, index: number) => <p className={style.category} key={index}>{category.name} -</p>) : null}
        </div>
        <p>Location: </p>
        
        
      </div>
        <NavLink to={`/sellerdetail/${_id}`} className={style.link}>
          <button>Check it out</button>
        </NavLink>
      
     
    </article>
  )
}

export default BusinessCard
