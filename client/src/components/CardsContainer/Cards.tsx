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
import { useEffect, useState } from 'react'
import type { ServiceProvider } from '../../interfaces'

const Cards: React.FC<CardsProps> = ({ allServices }) => {
  const [key, setKey] = useState(0)
  const { filteredUsers } = useFilterHook(allServices)
  const { filter } = useSelector((state: RootState) => state)

  useEffect(() => {
    setKey(key + 1)
  }, [allServices])

  const [sortOption, setSortOption] = useState('default')

  function calcularRatingPromedio(reviews: any): any {
    if (reviews.length === 0) {
      return 0
    }
    const totalRatings = reviews.reduce((sum: any, review: any) => sum + review.rating, 0)
    return totalRatings / reviews.length
  }

  const sellersWithAverageRating = filteredUsers.map((seller) => ({
    ...seller,
    averageRating: calcularRatingPromedio(seller.reviews)
  }))

  if (sortOption === '1') {
    sellersWithAverageRating.sort((a, b) => b.averageRating - a.averageRating)
  } else if (sortOption === '2') {
    sellersWithAverageRating.sort((a, b) => a.averageRating - b.averageRating)
  }
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage, startPage, finalPage } = usePagination(sellersWithAverageRating, 6, filter, key)

  return (
    <>
      <div className={style.general}>
        <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} startPage={startPage} finalPage={finalPage} />
        <div className={style['div-container-order-filter-cards']}>
          <FilterAndOrderCard allServices={allServices} setSortOption={setSortOption} />
          <section className={style.cardsSection}>
            {itemsPaginated.map(({ _id, sellerName, categoriesArray, reviews, images }: ServiceProvider) => {
              return <BusinessCard key={_id} _id={_id} reviews={reviews} sellerName={sellerName} categoriesArray={categoriesArray} images={images} />
            })}
          </section>
        </div>
      </div>
    </>
  )
}

export default Cards
