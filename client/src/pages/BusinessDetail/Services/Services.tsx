import type { Service } from '../../../interfaces'
import ServiceCard from '../../../components/ServiceCard/ServiceCard'
import style from './Services.module.css'
import { usePagination } from '../../../hooks/usePagination'
import Pagination from '../../../components/Pagination/Pagination'

const Services = ({ services }: any): JSX.Element => {
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage, goToFirst, goToLast } = usePagination(services, 3)
  return (
    <>
      <section className={style.container}>
        <h2 className={style.subtitle}>Services:</h2>
        <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} goToFirst={goToFirst} goToLast={goToLast} />
        <div className={style.services}>
          {itemsPaginated.map(({ id, name, description, price, category }: Service) => {
            return <ServiceCard key={id} id={id} name={name} description={description} price={price} category={category} />
          })}
        </div>
      </section>
    </>
  )
}

export default Services
