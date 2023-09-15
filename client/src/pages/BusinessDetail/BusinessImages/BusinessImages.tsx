import style from './BusinessImages.module.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { NotAvailableImage } from '../../../Images/LandingImages'

const BusinessImages = (): JSX.Element => {
  const { sellerdetail } = useSelector((state: RootState) => state)

  return (
    <div className={style.images}>
      <div className={style.sideImageFirst}>
        <img src={sellerdetail.images[0] ?? NotAvailableImage} alt={sellerdetail.images[0] ?? NotAvailableImage} />
      </div>

        <div className={style.sideImageOne}>
            <img src={sellerdetail.images[1] ?? NotAvailableImage} alt={sellerdetail.images[1] ?? NotAvailableImage} />
        </div>

        <div className={style.sideImageTwo}>
            <img src={sellerdetail.images[2] ?? NotAvailableImage} alt={sellerdetail.images[2] ?? NotAvailableImage} />
        </div>
    </div>
  )
}
export default BusinessImages
