import style from './Reviews.module.css'
import Review from '../Review/Review'
import Pagination from '../Pagination/Pagination'
import { usePagination } from '../../hooks/usePagination'

const Reviews = ({ reviews }: any): JSX.Element => {
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage } = usePagination(reviews, 6)

  return (
        <section className={style.container}>
            <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />
            <div className={style.reviews}>
                {itemsPaginated?.map(({ date, comment, rating, serviceName }: any, index: number) => {
                  return (
                        <Review
                            key={`review-${index}`}
                            date={date}
                            comment={comment}
                            rating={rating}
                            serviceName={serviceName}
                        />
                  )
                })}
            </div>
        </section>
  )
}

export default Reviews
