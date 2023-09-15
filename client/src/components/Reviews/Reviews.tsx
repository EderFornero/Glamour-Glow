import style from './Reviews.module.css'
import Review from '../Review/Review'
import Pagination from '../Pagination/Pagination'
import { usePagination } from '../../hooks/usePagination'
import type { ReviewType } from '../../interfaces'

export interface ReviewsProps {
  reviews: ReviewType[]
}
const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage, startPage, finalPage } = usePagination(reviews, 6)
  return (
    <section className={style.container}>
      <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} startPage={startPage} finalPage={finalPage} />
      <div className={style.reviews}>
        {itemsPaginated.map(({ description, rating, userId }: ReviewType, index: number) => {
          return <Review key={`review-${index}`} description={description} rating={rating} name={userId.name} lastName={userId.lastName} image={userId.image} />
        })}
      </div>
    </section>
  )
}

export default Reviews
