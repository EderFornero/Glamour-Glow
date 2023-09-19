// css
import style from './FilterAndOrderCard.module.css'
import FilterElement from './FilterElement/FilterElement'
// props
import type { CardsProps } from '../../interfaces/props'
// components
import OrderElement from './OrderElement/OrderElement'

const FilterAndOrderCard: React.FC<CardsProps> = ({ allServices, setSortOption }: CardsProps) => {
  return (
    <div className={style['div-container-order-filter']}>
      <OrderElement setSortOption={setSortOption} />
      <FilterElement allServices={allServices} />
    </div>
  )
}

export default FilterAndOrderCard
