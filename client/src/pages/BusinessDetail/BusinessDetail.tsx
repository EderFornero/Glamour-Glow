import { useParams } from 'react-router-dom'
import useGetDetail from '../../hooks/useGetDetail'
import style from './BusinessDetail.module.css'
import type { Service } from '../../interfaces'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import imagetest1 from '../../Images/imagenes testeo/Imgtest1.avif'
import imagetest2 from '../../Images/imagenes testeo/imagetest2.avif'
import imagetest3 from '../../Images/imagenes testeo/imgtest3.avif'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import { Fab } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useState } from 'react'
import FavoriteIconEmpty from "@mui/icons-material/FavoriteBorder"
import StarIcon from '@mui/icons-material/Star';


const BusinessDetail = (): JSX.Element => {
  const { id } = useParams()
  let usuario = null

  if (id !== undefined) {
    usuario = useGetDetail(+id)
  }

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };
  return (
    <div className={style['global-container']}>
      <section className={style['business']}>
        <div className={style['business-info-container']}>
          <div className={style['business-info']}>
            <h2 className={style.title}>{usuario.businessName}</h2>
            <div className={style['rating-container']}>
              <StarIcon className={style.rating}></StarIcon>
              <p>{usuario.rating}</p>
            </div>
            <p className={style.location}>{usuario.location}</p>
          </div>
          <div className={style.wrapper}>
            <Fab className={style.fav} onClick={toggleFavorite}>
              {isFavorite ? (
                <FavoriteIcon className={style['favorite-button-filled']} />
              ) : (
                <FavoriteIconEmpty className={style['favorite-button']} />
              )}
            </Fab>
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
      <h2>Services</h2>
      <section className={style['services-form']}>
        <div className={style.services}>
          {usuario.services.map(({ id, name, description, price, category }: Service) => {
            return (
              <ServiceCard key={id} id={id} name={name} description={description} price={price} category={category} />
            )
          })}
        </div>
        <div className={style.form}>
          <LeaveAComment user={usuario} />
        </div>
      </section>
    </div>
  )
}

export default BusinessDetail
