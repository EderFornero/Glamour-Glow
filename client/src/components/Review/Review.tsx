import style from './Review.module.css'
import StarIcon from '@mui/icons-material/Star'

const Review = ({ description, rating, name, lastName, image }: any): JSX.Element => {
  return (
    <article className={style.container}>
      <div className={style['div-img-name-review']}>
        <img className={style['div-img-review']} src={image} alt={name} />
        <p className={style.date}>{`${name} ${lastName}`}</p>
      </div>
      <div className={style.rating}>
        <StarIcon />
        <p>{rating}</p>
      </div>
      <div className={style.comment}>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Review
