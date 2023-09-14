import style from './BusinessImages.module.css'
import { useEffect, useState } from 'react'
import Cloudinary from '../../../components/Cloudinary/Cloudinary'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { NotAvailableImage } from '../../../Images/LandingImages'
import { cleanSellerDetail } from '../../../redux/actions'

const BusinessImages = (): JSX.Element => {
  const [isMainHovered, setIsMainHovered] = useState(false)
  const [isSecondHovered, setIsSecondHovered] = useState(false)
  const [isThirdHovered, setIsThirdHovered] = useState(false)
  const { sellerdetail } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(cleanSellerDetail())
  }, [])

  return (
    <div className={style.images}>
      <div className={style['main-img-container']}>
        <img src={sellerdetail.images[0] ?? NotAvailableImage} alt='' className={style['main-img']} />
      </div>

      <div className={style['side-images']}>
        <div className={style['side-images-relative']}>
            <img className={style['second-image']} src={sellerdetail.images[1] ?? NotAvailableImage} alt='' />
        </div>

        <div className={style['side-images-relative']}>
            <img className={style['third-image']} src={sellerdetail.images[2] ?? NotAvailableImage} alt='' />
        </div>
      </div>
    </div>
  )
}
export default BusinessImages
