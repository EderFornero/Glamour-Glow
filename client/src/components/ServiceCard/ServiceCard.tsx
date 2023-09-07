import type { Service } from '../../interfaces'
import style from './ServiceCard.module.css'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ name, time, price }: Service): JSX.Element => {
  const navigate = useNavigate()
  const handleBookNowClick = (): void => {
    navigate(`/bookaservice/${encodeURIComponent(name)}/${encodeURIComponent(price)}`)
  }

  return (
    <article className={style.container}>
      <div className={style.info}>
        <h3 className={style.title}>{name}</h3>
        <p>{time}</p>
        <p>{`$${price} -`}</p>
      </div>
      <div className={style['booking-container']}>
        <button className={style.button} onClick={handleBookNowClick}>
          Book Now
        </button>
      </div>
    </article>
  )
}

export default ServiceCard
