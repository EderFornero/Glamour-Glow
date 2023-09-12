import style from './Pagination.module.css'

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
      <button disabled={currentPage === 0} onClick={prevPage}>
        Previous
      </button>
      <span onClick={startPage} className={style['span-go-to-start-final']}>
        1
      </span>
      ...
      <p>{currentPage + 1}</p>
      ...
      <span className={style['span-go-to-start-final']} onClick={finalPage}>
        {totalPages}
      </span>
      <button disabled={currentPage === totalPages - 1} onClick={nextPage}>
        Next
      </button>
    </div>
  )
}

export default Pagination
