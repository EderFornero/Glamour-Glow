import type { Service } from '../../../interfaces'
import ServiceCard from '../../../components/ServiceCard/ServiceCard'
import style from './Services.module.css'
// import { usePagination } from '../../../hooks/index'
// import Pagination from '../../../components/Pagination/Pagination'
// import { useSelector } from 'react-redux'
// import type { RootState } from '../../../redux/types'

const Services = ({ sellerId, services }: any): JSX.Element => {
  // const services = useSelector((state: RootState) => state.sellerdetail.servicesArray)
  // const { itemsPaginated, currentPage, totalPages, nextPage, prevPage } = usePagination(services, 3)

  return (
    <>
      <section className={style.container}>
        <h2 className={style.subtitle}>Services:</h2>
        {/* <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} /> */}
        <div className={style.services}>
          {services.map(({ id, name, description, price, category }: Service, index: number) => {
            return <ServiceCard key={`${id}${index}`} id={id} name={name} description={description} price={price} category={category} sellerId={sellerId} />
          })}
        </div>
      </section>
    </>
  )
}

export default Services
