import style from './BusinessImages.module.css'
import { useEffect, useState } from 'react'
import Cloudinary from '../../../components/Cloudinary/Cloudinary'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { NotAvailableImage } from '../../../Images/LandingImages'
import { updateSellerInfo } from '../../../redux/actions'
import { useParams } from 'react-router-dom'

const BusinessImages = (): JSX.Element => {
  const [isMainHovered, setIsMainHovered] = useState(false)
  const [isSecondHovered, setIsSecondHovered] = useState(false)
  const [isThirdHovered, setIsThirdHovered] = useState(false)
  const { sellerdetail, image } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    console.log('Image:', image)
    console.log('Seller Detail Images:', sellerdetail.images)
    if (image !== undefined && sellerdetail?.images && sellerdetail.images.length > 0) {
      sellerdetail.images.push(image)
      const updatedImages = [...sellerdetail.images, image]
      dispatch(updateSellerInfo(id, { images: updatedImages }))
    }
  }, [image])

  const onClick = (e: number): void => {
    if (image !== undefined && sellerdetail?.images && sellerdetail.images.length > 0) sellerdetail.images[e] = image
    console.log('Image:', image)
    console.log('Seller Detail Images:', sellerdetail.images)
  }

  return (
    <div className={style.images}>
      <div className={`${isMainHovered ? style['main-img-container-hovered'] : style['main-img-container']}`}
        onMouseEnter={() => { setIsMainHovered(true) }}
        onMouseLeave={() => { setIsMainHovered(false) }}
      >
        <img src={sellerdetail.images[0] ?? NotAvailableImage} alt='' className={style['main-img']} />
        <div onClick={(e) => { onClick(0) }} className={style['upload-image-container']}>
          <Cloudinary />
        </div>
      </div>

      <div className={style['side-images']}>
        <div className={style['side-images-relative']}>
          <div className={`${isSecondHovered ? style['other-img-container-hovered'] : style['other-img-container']}`}
            onMouseEnter={() => { setIsSecondHovered(true) }}
            onMouseLeave={() => { setIsSecondHovered(false) }}
          >
            <img className={style['second-image']} src={sellerdetail.images[1] ?? NotAvailableImage} alt='' />
            <div onClick={(e) => { onClick(1) }} className={style['upload-image-container']}>
              <Cloudinary />
            </div>
          </div>
        </div>

        <div className={style['side-images-relative']}>
          <div className={`${isThirdHovered ? style['other-img-container-hovered'] : style['other-img-container']}`}
            onMouseEnter={() => { setIsThirdHovered(true) }}
            onMouseLeave={() => { setIsThirdHovered(false) }}
          >
            <img className={style['third-image']} src={sellerdetail.images[2] ?? NotAvailableImage} alt='' />
            <div onClick={(e) => { onClick(2) }} className={style['upload-image-container']}>
              <Cloudinary />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default BusinessImages
