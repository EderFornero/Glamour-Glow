import { serviceProviders } from '../../../../mocks/serviceProvider.json'
import ServiceCard from '../ServiceCard/ServiceCard'
import type { ServiceProvider } from '../../interfaces'
import './Cards.css'

const Cards = (): JSX.Element => {
  return (
    <section className='cardsSection'>
      {/* Loader while services are loading */}
      {serviceProviders.map(({ sellerId, serviceId, price, rating, categoryId, sellerName, serviceDescription }: ServiceProvider) => {
        return (
          <ServiceCard key={`${sellerId}${serviceId}`} price={price} rating={rating} categoryId={categoryId} sellerName={sellerName} serviceDescription={serviceDescription} />
        )
      })}
    </section>
  )
}

export default Cards
