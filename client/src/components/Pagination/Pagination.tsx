import style from "./Pagination.module.css"

const Pagination = ({ currentPage, totalPages, nextPage, prevPage }: any): JSX.Element => {
    return (
        <div className={style.pagination}>
            <button disabled={currentPage === 0}
                onClick={prevPage}>Previous</button>
            <p>{currentPage + 1}</p>
            <button disabled={currentPage === totalPages - 1}
                onClick={nextPage}>Next</button>
        </div>
    )
}

export default Pagination

