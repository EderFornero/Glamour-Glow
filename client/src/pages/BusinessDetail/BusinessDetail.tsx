import { useParams } from 'react-router-dom'
import useGetDetail from '../../hooks/useGetDetail'
import style from './BusinessDetail.module.css'
import type { Service } from '../../interfaces'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
// import imagetest1 from '../../Images/imagenes testeo/Imgtest1.avif'
// import imagetest2 from '../../Images/imagenes testeo/imagetest2.avif'
// import imagetest3 from '../../Images/imagenes testeo/imgtest3.avif'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import Reviews from '../../components/Reviews/Reviews'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import BusinessImages from './BusinessInfo/BusinessImages/BusinessImages'
import { useServicePagination } from '../../hooks/useServicePagination'



const BusinessDetail = (): JSX.Element => {
  const { id } = useParams()
  let usuario = null

  if (id !== undefined) {
    usuario = useGetDetail(+id)
  }

  const { servicesPaginated, currentPage, totalPages, nextPage, prevPage } = useServicePagination(usuario.services, 4)



  return (
    <div className={style['global-container']}>
      <section className={style['business']}>
        <BusinessInfo usuario={usuario} />
        <BusinessImages />
      </section >
      <h2>Services</h2>
      <section className={style['services-form']}>
        <div className={style.pagination}>
          <button disabled={currentPage === 0}
            onClick={prevPage}>Previous</button>
          <p>{currentPage + 1}</p>
          <button disabled={currentPage === totalPages - 1}
            onClick={nextPage}>Next</button>
        </div>
        <div className={style.services}>
          {servicesPaginated.map(({ id, name, description, price, category }: Service) => {
            return (
              <ServiceCard key={id} id={id} name={name} description={description} price={price} category={category} />
            )
          })}
        </div>
        <div className={style.form}>
          <LeaveAComment user={usuario} />
        </div>
        <div className={style.reviews}>
          <Reviews />
        </div>
      </section>
    </div>
  )
}

export default BusinessDetail
