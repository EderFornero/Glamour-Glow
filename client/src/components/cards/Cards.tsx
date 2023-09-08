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
  const calculateRating = (reviews: any): number => {
    const totalRating = reviews.reduce((accumulator: number, current: any) => {
      return accumulator + current.review
    }, 0)

    const averageRating = totalRating / reviews.length
    return averageRating
  }

  return (
    <>
      <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} startPage={startPage} finalPage={finalPage} />
      <div className={style.test}>
        <div className={style['div-container-order-filter-cards']}>
          <FilterAndOrderCard searchUsers={searchUsers} />
          <section className={style.cardsSection}>
            {itemsPaginated.map(({ _id, sellerName, categoriesArray, servicesArray, reviews }: any) => {
              return <BusinessCard key={_id} _id={_id} sellerName={sellerName} rating={calculateRating(reviews)} categoriesArray={categoriesArray} servicesArray={servicesArray} />
            })}
          </section>
        </div>
      </div>
    </>
  )
}

export default Cards
