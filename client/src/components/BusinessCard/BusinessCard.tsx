import type { ServiceProvider } from '../../interfaces'
import style from './BusinessCard.module.css'
import { NavLink } from 'react-router-dom'

const BusinessCard: React.FC<ServiceProvider> = ({ _id, sellerName, reviews, categoriesArray }: ServiceProvider) => {
  return (
    <article className={style.card}>
      {/* <img src="source" alt="alt" /> */}
      <h2 className={style.title}> {sellerName}</h2>
      <p>Rating: {reviews}</p>
      <p>Location: </p>
      {categoriesArray.map((category, index) => {
        return <p key={index}>{category.name}</p>
      })}
      <NavLink to={`/sellerdetail/${_id}`} className={style.link}>
        <button>Check it out</button>
      </NavLink>
    </article>
  )
}

export default BusinessCard
