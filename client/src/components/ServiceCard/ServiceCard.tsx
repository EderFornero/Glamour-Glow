import type { Service } from '../../interfaces'
import style from './ServiceCard.module.css'

const ServiceP = ({ name, time, price }: Service): JSX.Element => {
  return (
    <article className={style.container}>
      <div className={style.info}>
        <h3 className={style.title}>{name}</h3>
        <p>{time}</p>
        <p>{`$${price} -`}</p>
      </div>
      <div className={style['booking-container']}>
        <button className={style.button} >Book Now</button>
      </div>
    </article>
  )
}

export default ServiceP
