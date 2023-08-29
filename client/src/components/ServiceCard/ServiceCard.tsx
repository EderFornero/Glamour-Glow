import type { ServiceProvider } from '../../interfaces'
import './ServiceCard.css'
// import { NavLink } from 'react-router-dom';

const ServiceCard: React.FC<ServiceProvider> = ({ sellerName, price, rating, serviceDescription }) => {
  return (
    <article className='card'>
      {/* <img src="source" alt="alt" /> */}
      <h2>Name: {sellerName}</h2>
      <h3>Price: {price}</h3>
      <p>Rating: {rating}</p>
      <p>Description: {serviceDescription}</p>
      {/* <NavLink to=route here> */}<button>Check it out</button>{/* </NavLink> */}
    </article>
  )
}

export default ServiceCard
