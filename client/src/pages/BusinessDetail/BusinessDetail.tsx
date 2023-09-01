import { useParams } from 'react-router-dom'
import useGetDetail from '../../hooks/useGetDetail'
import style from './BusinessDetail.module.css'
import type { Service } from '../../interfaces'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import imagetest1 from '../../Images/imagenes testeo/Imgtest1.avif'
import imagetest2 from '../../Images/imagenes testeo/imagetest2.avif'
import imagetest3 from '../../Images/imagenes testeo/imgtest3.avif'
const BusinessDetail = (): JSX.Element => {
  const { id } = useParams()
  let usuario = null

  if (id !== undefined) {
    usuario = useGetDetail(+id)
  }

  return (
    <div className={style['global-container']}>
      <section className={style.hola}>
        <div className={style['business-info-container']}>
          <div className={style['business-info']}>
            <h2 className={style.title}>{usuario.businessName}</h2>
            <p className={style.price}>⭐{usuario.rating}</p>
            <p className={style.location}>{usuario.location}</p>
          </div>
          <div className={style.wrapper}>
            <div className={style.fav}>
              <i className={style['favorite-button']}>❤️</i>
            </div >
          </div>
        </div>
        <div className={style.images}>
          <div className={style['main-img-container']}>
            <img src={imagetest3} alt="" className={style['main-img']} />
          </div>
          <div className={style['side-images']}>
            <img src={imagetest1} alt="" />
            <img src={imagetest2} alt="" />
          </div>
        </div>
      </section >
      <section className={style.services}>
        {usuario.services.map(({ id, name, description, price, category }: Service) => {
          return (
            <ServiceCard key={id} id={id} name={name} description={description} price={price} category={category} />
          )
        })}
      </section>
    </div >
  )
}

export default BusinessDetail
