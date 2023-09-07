import type { ServiceProvider } from '../../interfaces'
import style from './BusinessCard.module.css'
import { NavLink } from 'react-router-dom'

const BusinessCard: React.FC<ServiceProvider> = ({ id, businessName, rating, categories }) => {
  return (
    <article className={style.card}>
      {/* <img src="source" alt="alt" /> */}
      <h2 className={style.title}> {businessName}</h2>
      <p>Rating: {rating}</p>
      <p>Location: </p>
      {categories.map((category, index) => {
        return <p key={index}>{category}</p>
      })}
      <NavLink to={`/detail/${id}`} className={style.link}>
        <button>Check it out</button>
      </NavLink>
    </article>
  )
}

export default BusinessCard
