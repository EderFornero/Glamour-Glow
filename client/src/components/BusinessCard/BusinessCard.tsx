import style from './BusinessCard.module.css'
import { NavLink } from 'react-router-dom'

const BusinessCard = ({ _id, sellerName, rating, categoriesArray }: any): JSX.Element => {
  return (
    <article className={style.card}>
      {/* <img src="source" alt="alt" /> */}
      <h2 className={style.title}> {sellerName}</h2>
      <p>Rating: {rating}</p>
      <p>Location: </p>
      {Array.isArray(categoriesArray) ? categoriesArray.map((category: any, index: number) => <p key={index}>{category.name}</p>) : null}
      <NavLink to={`/sellerdetail/${_id}`} className={style.link}>
        <button>Check it out</button>
      </NavLink>
    </article>
  )
}

export default BusinessCard
