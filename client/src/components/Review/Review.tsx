import style from './Review.module.css'
import StarIcon from '@mui/icons-material/Star'

const Review = ({ description, rating, name, lastName }: any): JSX.Element => {
  return (
    <article className={style.container}>
      <p className={style.date}>{`${name} ${lastName}`}</p>
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
