import { users } from '../../../../mocks/fullAPIresponse.json'
import ServiceCard from '../ServiceCard/ServiceCard'
import type { ServiceProvider } from '../../interfaces'
import style from './Cards.module.css'

const Cards = (): JSX.Element => {
  return (
    <section className={style.cardsSection}>
      {/* Loader while services are loading */}
      {users.map(({ id, businessName, businessLocation, rating, categories, services }: ServiceProvider) => {
        return <ServiceCard key={id} id={id} businessName={businessName} businessLocation={businessLocation} rating={rating} categories={categories} services={services} />
      })}
    </section>
  )
}

export default Cards
