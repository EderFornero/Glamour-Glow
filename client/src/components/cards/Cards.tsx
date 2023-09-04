// components
import BusinessCard from '../BusinessCard/BusinessCard'
// interfaces
import type { ServiceProvider } from '../../interfaces'
// css
import style from './Cards.module.css'
// props
import type { CardsProps } from '../../interfaces/props'
// hooks
import { Pagination, useFilterHook, useRatingHook } from '../../hooks/index'
// categories
import { categories } from '../../../../mocks/categories.json'

const Cards: React.FC<CardsProps> = ({ searchUsers }: CardsProps) => {
  const { startPage, finalPage, previousPage, nextPage, pages, startSlice, finalSlice, totalPages } = Pagination(searchUsers)
  const { useFilter, filteredUsers } = useFilterHook(searchUsers)
  const { useRating } = useRatingHook()

  return (
    <>
      <div className={style['pagination-div-buttons']}>
        <button className={style['pagination-div-buttons-previous-next']} onClick={previousPage} disabled={pages === 0}>
          Previous
        </button>
        <div className={style['span-go-to-start-final']}><span onClick={startPage}>1</span> ... {pages + 1} ... <span className={style['span-go-to-final']} onClick={finalPage}>{totalPages}</span></div>
        <button className={style['pagination-div-buttons-previous-next']} onClick={nextPage} disabled={pages === totalPages - 1 || searchUsers.length === 0}>
          Next
        </button>
      </div>
      <div className={style['div-container-order-filter-cards']}>
        <div className={style['div-container-order-filter']}>
          <div className={style['div-order-by']}>
          <h5>Order by</h5>
            <ul className={style['div-order-by-ul']}>
              <li onClick={() => { useRating(1) }} className={style['div-order-by-li']}>More Rating</li>
              <li onClick={() => { useRating(2) }} className={style['div-order-by-li']}>Less Rating</li>
            </ul>
          </div>
          <div className={style['div-filter-by']}>
            <h5>Filter By</h5>
          <button onClick={() => { useFilter('none') }}>All Categories</button>
          {
            categories.map((category) => {
              return (
                <div key={category.id}>
                  <button onClick={() => { useFilter(category.name) }}>{category.name}</button>
                </div>
              )
            })
          }
          </div>
        </div>
        <section className={style.cardsSection}>
          {
            filteredUsers
              .slice(startSlice, finalSlice)
              .map(({ id, businessName, businessLocation, rating, categories, services }: ServiceProvider) => {
                return <BusinessCard key={id} id={id} businessName={businessName} businessLocation={businessLocation} rating={rating} categories={categories} services={services} />
              })
          }
        </section>
      </div>
    </>
  )
}

export default Cards
