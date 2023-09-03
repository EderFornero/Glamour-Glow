// components
import BusinessCard from '../BusinessCard/BusinessCard'
// interfaces
import type { ServiceProvider } from '../../interfaces'
// css
import style from './Cards.module.css'
// props
import type { CardsProps } from '../../interfaces/props'
// hooks
import { Pagination } from '../../hooks/index'
import { setPages } from '../../redux/Actions'
// redux 
import { useDispatch } from 'react-redux'


const Cards: React.FC<CardsProps> = ({ searchUsers }: CardsProps) => {
  const { previousPage, nextPage, pages } = Pagination()
  const perPage = 6
  const dispatch = useDispatch()

  const start = pages * perPage
  const final = start + perPage
  const totalPages = Math.ceil(searchUsers.length / perPage)

  const startPage = () => {
    dispatch(setPages(0))
  }

  const finalPage = () => {
    dispatch(setPages(totalPages - 1));
  }

  return (
    <>
      <div className={style['pagination-div-buttons']}>
        <button className={style['pagination-div-buttons-previous-next']} onClick={previousPage} disabled={pages === 0}>
          Previous
        </button>
        <div className="span-go-to-start-final"><span onClick={startPage}>1</span> ... {pages + 1} ... <span className="span-go-to-final" onClick={finalPage}>{totalPages}</span></div>
        <button className={style['pagination-div-buttons-previous-next']} onClick={nextPage} disabled={pages === totalPages - 1 || searchUsers.length === 0}>
          Next
        </button>
      </div>
      <section className={style.cardsSection}>
        {
          searchUsers
            .slice(start, final)
            .map(({ id, businessName, businessLocation, rating, categories, services }: ServiceProvider) => {
              return <BusinessCard key={id} id={id} businessName={businessName} businessLocation={businessLocation} rating={rating} categories={categories} services={services} />
            })
        }
      </section>
    </>
  )
}

export default Cards
