import style from './BusinessImages.module.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { NotAvailableImage } from '../../../Images/LandingImages'

const BusinessImages = (): JSX.Element => {
  const { sellerdetail } = useSelector((state: RootState) => state)

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
