// components
import BusinessCard from '../BusinessCard/BusinessCard'
import Pagination from '../Pagination/Pagination'
import FilterAndOrderCard from '../FilterAndOrderCard/FilterAndOrderCard'
// interfaces
// import type { ServiceProvider } from '../../interfaces'
// css
import style from './Cards.module.css'
// props
import type { CardsProps } from '../../interfaces/props'
// hooks
import { useFilterHook, usePagination } from '../../hooks/index'
// redux
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/types'

const Cards: React.FC<CardsProps> = ({ allServices }: CardsProps) => {
  const { filteredUsers } = useFilterHook(allServices)
  const { filter } = useSelector((state: RootState) => state)
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage, startPage, finalPage } = usePagination(filteredUsers, 6, filter)
  return (
    <>
      <div className={style.test}>
        <div className={style['div-container-order-filter-cards']}>
          <FilterAndOrderCard allServices={allServices} />
          <section className={style.cardsSection}>
            {itemsPaginated.map(({ _id, sellerName, categoriesArray, servicesArray, reviews }: any) => {
              return <BusinessCard key={_id} _id={_id} reviews={reviews} sellerName={sellerName} categoriesArray={categoriesArray} servicesArray={servicesArray} />
            })}
          </section>
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} startPage={startPage} finalPage={finalPage} />
    </>
  )
}

export default Cards
