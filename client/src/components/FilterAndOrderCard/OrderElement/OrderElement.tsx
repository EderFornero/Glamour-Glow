import { useState } from 'react'
// css
import style from './OrderElement.module.css'
// hook
import { useRatingHook } from '../../../hooks'
const OrderElement = (): JSX.Element => {
  const { useRating } = useRatingHook()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSort = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={style['div-order-by']}>
        <div className={style['sort-by-reviews']}>
          <button className={style['sort-button-toggle']} onClick={toggleSort}>Order by</button>
        </div>
        <div className={`${isOpen ? style['div-sort-opened'] : style['div-sort-closed']}`}>
          <div className={style['div-all-sort']}>
            <button onClick={() => { useRating(1) }} className={style['sort-button']}>More Rating</button>
            <button onClick={() => { useRating(2) }} className={style['sort-button']}>Less Rating</button>
          </div>
        </div>
      </div>
  )
}

export default OrderElement
