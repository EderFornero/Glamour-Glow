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
  const [selectedCategory, setSelectedCategory] = useState<string | null>('none')

  const toggleSort = (): void => {
    setIsOpen(!isOpen)
  }

  const handleCategoryClick = (categoryName: string): void => {
    useFilter(categoryName)
    setSelectedCategory(categoryName)
    toggleSort()
  }

  return (
    <div className={style['div-filter-by']}>
      <div className={style['filter-by-categories']}>
        <button className={`${style['filter-button-toggle']} ${isOpen ? style['active-button'] : ''}`} onClick={toggleSort}>
          Filter By
        </button>
      </div>

      <div className={`${isOpen ? style['div-filter-opened'] : style['div-filter-closed']}`}>
        <div className={style['div-container-buttons']}>
          <button
            className={`${style['button-categories']} ${selectedCategory === 'none' ? style['selected-button'] : ''}`}
            onClick={() => {
              handleCategoryClick('none')
            }}
          >
            All Categories
          </button>
          {categories?.map((category) => {
            return (
              <button
                className={`${style['button-categories']} ${selectedCategory === category.name ? style['selected-button'] : ''}`}
                key={category.id}
                onClick={() => {
                  handleCategoryClick(category.name)
                }}
              >
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FilterElement
