import style from './Review.module.css'
import StarIcon from '@mui/icons-material/Star'

interface ReviewProps {
  description: string
  rating: number
  name: string
  lastName: string
}

const Review: React.FC<ReviewProps> = ({ description, rating, name, lastName }) => {
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
