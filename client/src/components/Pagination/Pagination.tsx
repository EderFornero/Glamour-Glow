import style from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, nextPage, prevPage, goToFirst, goToLast }: any): JSX.Element => {
    return (
        <div className={style.pagination}>
            <span onClick={goToFirst}>First</span>
            <button disabled={currentPage === 0}
                onClick={prevPage}>Previous</button>
            <p>{currentPage + 1}</p>
            <button disabled={currentPage === totalPages - 1}
                onClick={nextPage}>Next</button>
            <span onClick={goToLast}>Last</span>
        </div>
    )
}

export default Pagination

