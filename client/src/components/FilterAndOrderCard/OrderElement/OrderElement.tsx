import { useState } from 'react'
// css
import style from './OrderElement.module.css'
// hook
// import { useRatingHook } from '../../../hooks'
const OrderElement = ({ setSortOption }: any): JSX.Element => {
  // const { useRating } = useRatingHook()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const toggleSort = (): void => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string): void => {
    setSortOption(option)
    setSelectedOption(option)
    toggleSort()
  }

  return (
    <div className={style['div-order-by']}>
      <div className={style['sort-by-reviews']}>
        <button className={style['sort-button-toggle']} onClick={toggleSort}>
          Order by
        </button>
      </div>
      <div className={`${isOpen ? style['div-sort-opened'] : style['div-sort-closed']}`}>
        <div className={style['div-all-sort']}>
          <button
            onClick={() => {
              handleOptionClick('1')
            }}
            className={`${style['sort-button']} ${selectedOption === '1' ? style['selected-button'] : ''}`}
          >
            More Rating
          </button>
          <button
            onClick={() => {
              handleOptionClick('2')
            }}
            className={`${style['sort-button']} ${selectedOption === '2' ? style['selected-button'] : ''}`}
          >
            Less Rating
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderElement
