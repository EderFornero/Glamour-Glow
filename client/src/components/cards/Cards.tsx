// components
import BusinessCard from '../BusinessCard/BusinessCard'
import Pagination from '../../components/Pagination/Pagination'
import FilterAndOrderCard from '../FilterAndOrderCard/FilterAndOrderCard'
// interfaces
import type { ServiceProvider } from '../../interfaces'
// css
import style from './Cards.module.css'
// props
import type { CardsProps } from '../../interfaces/props'
// hooks
import { useFilterHook, usePagination } from '../../hooks/index'
// redux
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/types'

const Cards: React.FC<CardsProps> = ({ searchUsers }: CardsProps) => {
  const { filteredUsers } = useFilterHook(searchUsers)
  const { filter, rating } = useSelector((state: RootState) => state)
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage, startPage, finalPage } = usePagination(filteredUsers, 6, filter, rating)
  return (
    <>
      <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} startPage={startPage} finalPage={finalPage} />
      <div className={style.test}>
      <div className={style['div-container-order-filter-cards']}>
        <FilterAndOrderCard searchUsers={searchUsers}/>
        <section className={style.cardsSection}>
          {
            itemsPaginated
              .map(({ id, businessName, businessLocation, rating, categories, services }: ServiceProvider) => {
                return <BusinessCard key={id} id={id} businessName={businessName} businessLocation={businessLocation} rating={rating} categories={categories} services={services} />
              })
          }
        </section>
      </div>
      </div>
    </>
  )
}

export default Cards
