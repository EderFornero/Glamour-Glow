import { useState } from 'react'
// css
import style from './FilterElement.module.css'
// hook
import { useFilterHook } from '../../../hooks'
// state
import type { RootState } from '../../../redux/types'
// redux
import { useSelector } from 'react-redux'
// props
import type { CardsProps } from '../../../interfaces/props'
const FilterElement: React.FC<CardsProps> = ({ allServices }: CardsProps) => {
  const { useFilter } = useFilterHook(allServices)
  const { categories } = useSelector((state: RootState) => state)
  const [isOpen, setIsOpen] = useState(false)

  const toggleSort = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={style['div-filter-by']}>
      <div className={style['filter-by-categories']}>
        <button className={style['filter-button-toggle']} onClick={toggleSort}>Filter By</button>
      </div>

      <div className={`${isOpen ? style['div-filter-opened'] : style['div-filter-closed']}`}>
        <div className={style['div-container-buttons']}>
          <button className={style['button-categories']} onClick={() => { useFilter('none') }}>All Categories</button>
          {
            categories?.map((category) => {
              return (
                <button
                  className={style['button-categories']}
                  key={category.id}
                  onClick={() => { useFilter(category.name) }}>
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FilterElement
