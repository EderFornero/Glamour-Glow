import style from './Pagination.module.css'
import StandardButton from '../StandardButton/StandardButton'

interface PaginationProps {
  currentPage: number
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  startPage: () => void
  finalPage: () => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, nextPage, prevPage, startPage, finalPage }) => {
  return (
    <div className={style.pagination}>
      <StandardButton variant='sizePagination' disabled={currentPage === 0} onClick={prevPage}>
        Previous
      </StandardButton>
      <span onClick={startPage} className={style['span-go-to-start-final']}>
        1
      </span>
      ...
      <p className={style.p}>{currentPage + 1}</p>
      ...
      <span className={style['span-go-to-start-final']} onClick={finalPage}>
        {totalPages}
      </span>
      <StandardButton variant='sizePagination' disabled={currentPage === totalPages - 1} onClick={nextPage}>
        Next
      </StandardButton>
    </div>
  )
}

export default Pagination
