import { Tooltip } from '@mui/material'
import type { Service } from '../../interfaces'
import style from './ServiceCard.module.css'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ name, price, sellerId }: Service): JSX.Element => {
  const navigate = useNavigate()
  const handleBookNowClick = (): void => {
    navigate(`/bookaservice/${encodeURIComponent(name)}/${encodeURIComponent(price)}/${encodeURIComponent(sellerId)}`)
  }

  const role = localStorage.getItem('role')

  return (
    <article className={style.container}>
      <div className={style.info}>
        <h3 className={style.title}>{name}</h3>
        <p>{`$${price} -`}</p>
      </div>
      <div className={style['booking-container']}>
        <Tooltip title={role !== 'customer' ? 'Must be logged in as user to make a purchase' : null}>
          <button className={style.button} onClick={handleBookNowClick} disabled={role !== 'customer'}>
            Book Now
          </button>
        </Tooltip>
      </div>
    </article>
  )
}

export default ServiceCard
