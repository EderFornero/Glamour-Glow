import style from './Review.module.css'
import StarIcon from '@mui/icons-material/Star'

const Review = ({ date, comment, rating, serviceName }: any): JSX.Element => {
  return (
        <article className={style.container}>
            <p className={style.date}>Date: {date}</p>
            <div className={style.rating}>
                <StarIcon />
                <p >{rating}</p>
            </div>
            <p className={style.service}>{serviceName}</p>
            <div className={style.comment}>
                <p>{comment}</p>
            </div>
        </article>
  )
}

export default Review
