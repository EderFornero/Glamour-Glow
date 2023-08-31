import type { ServiceProvider } from '../../interfaces'
import style from './ServiceCard.module.css'
import { NavLink } from 'react-router-dom'

const ServiceCard: React.FC<ServiceProvider> = ({ id, businessName, businessLocation, rating, categories }) => {
  return (
    <article className={style.card}>
      {/* <img src="source" alt="alt" /> */}
      <h2 className={style.title}> {businessName}</h2>
      <p>Rating: {rating}</p>
      <p>Location: {businessLocation}</p>
      {categories.map((category) => {
        return <p key={id}>{category}</p>
      })}
      <NavLink to={`/detail/${id}`} className={style.link}>
        <button>Check it out</button>
      </NavLink>
    </article>
  )
}

export default ServiceCard
