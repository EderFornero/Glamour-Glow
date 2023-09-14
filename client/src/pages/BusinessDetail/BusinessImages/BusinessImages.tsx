import style from './BusinessImages.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { NotAvailableImage } from '../../../Images/LandingImages'
import { cleanSellerDetail } from '../../../redux/actions'

const BusinessImages = (): JSX.Element => {
  const { sellerdetail } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(cleanSellerDetail())
  }, [])

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
