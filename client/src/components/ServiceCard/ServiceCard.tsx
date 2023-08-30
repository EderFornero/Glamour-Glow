import type { ServiceProvider } from '../../interfaces'
import './ServiceCard.css'
import { NavLink } from 'react-router-dom'

const ServiceCard: React.FC<ServiceProvider> = ({ id, businessName, businessLocation, rating, categories }) => {
  return (
    <article className='card'>
      {/* <img src="source" alt="alt" /> */}
      <h2 className='title'> {businessName}</h2>
      <p>Rating: {rating}</p>
      <p>Location: {businessLocation}</p>
      {categories.map((category) => {
        return <p key={id}>{category}</p>
      })}
      <NavLink to='ROUTE HERE' className='link'>
        <button>Check it out</button>
      </NavLink>
    </article>
  )
}

export default ServiceCard
