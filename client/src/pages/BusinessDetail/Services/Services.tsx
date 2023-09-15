import type { Service } from '../../../interfaces'
import ServiceCard from '../../../components/ServiceCard/ServiceCard'
import style from './Services.module.css'
import { usePagination } from '../../../hooks/index'
import Pagination from '../../../components/Pagination/Pagination'
// import { useSelector } from 'react-redux'
// import type { RootState } from '../../../redux/types'

interface ServicesProps {
  sellerId: string
  services: Service[]
}

const Services: React.FC<ServicesProps> = ({ sellerId, services }) => {
  const { itemsPaginated, currentPage, totalPages, nextPage, prevPage, startPage, finalPage } = usePagination(services, 3)
  return (
    <>
      <section className={style.container}>
        <h2 className={style.subtitle}>Services:</h2>
        <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} startPage={startPage} finalPage={finalPage} />
        <div className={style.services}>
          {itemsPaginated.map(({ id, name, description, price, category }: Service, index: number) => {
            return <ServiceCard key={`${id}${index}`} id={id} name={name} description={description} price={price} category={category} sellerId={sellerId} />
          })}
        </div>
      </section>
    </>
  )
}

export default Services
