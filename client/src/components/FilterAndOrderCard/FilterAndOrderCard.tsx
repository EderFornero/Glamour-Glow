import style from './FilterAndOrderCard.module.css'
// categories
import { categories } from '../../../mocks/categories.json'
// hooks
import { useFilterHook } from '../../hooks/index'
import type { CardsProps } from '../../interfaces/props'
const FilterAndOrderCard: React.FC<CardsProps> = ({ searchUsers }: CardsProps) => {
  const { useFilter } = useFilterHook(searchUsers)
  // const { useRating } = useRatingHook()
  return (
    <div className={style['div-container-order-filter']}>
          {/* <div className={style['div-order-by']}>
          <h5>Order by</h5>
            <ul className={style['div-order-by-ul']}>
              <li onClick={() => { useRating(1) }} className={style['div-order-by-li']}>More Rating</li>
              <li onClick={() => { useRating(2) }} className={style['div-order-by-li']}>Less Rating</li>
            </ul>
          </div> */}
          <div className={style['div-filter-by']}>
            <h5>Filter By</h5>
          <button onClick={() => { useFilter('none') }}>All Categories</button>
          {
            categories.map((category: any) => {
              return (
                <div key={category.id}>
                  <button onClick={() => { useFilter(category.name) }}>{category.name}</button>
                </div>
              )
            })
          }
          </div>
    </div>
  )
}

export default FilterAndOrderCard
