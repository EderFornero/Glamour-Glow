import style from './UpdateBusinessImage.module.css'
import { useEffect, useState } from 'react'
import Cloudinary from '../../../../components/Cloudinary/Cloudinary'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../redux/types'
import { NotAvailableImage } from '../../../../Images/LandingImages'
import { updateSellerInfo, updateSellerImageIndex } from '../../../../redux/actions'
import { useParams } from 'react-router-dom'

const UpdateBusinessImages = (): JSX.Element => {
  const [isMainHovered, setIsMainHovered] = useState(false)
  const [isSecondHovered, setIsSecondHovered] = useState(false)
  const [isThirdHovered, setIsThirdHovered] = useState(false)
  const { sellerdetail, image, sellerImageIndex } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (image != null) {
      sellerdetail.images[sellerImageIndex] = image
      dispatch(updateSellerInfo(id, { images: [...sellerdetail.images] }))
    }
  }, [image])

  const onClick = async (e: number): Promise<void> => {
    await dispatch(updateSellerImageIndex(e))
  }

  return (
    <div className={style['div-container-update-images']}>
      <div className={style['update-business-images-h6']}>
        <h5>Update Your Business Images</h5>
      </div>

      <div className={style.images}>
        <div className={style['side-images-relative']}>
          <div
            className={`${isMainHovered ? style['main-img-container-hovered'] : style['main-img-container']}`}
            onMouseEnter={() => {
              setIsMainHovered(true)
            }}
            onMouseLeave={() => {
              setIsMainHovered(false)
            }}
          >
            <img src={sellerdetail.images[0] ?? NotAvailableImage} alt={sellerdetail.sellerName} className={style['main-img']} />
            <div
              onClick={(_e) => {
                void onClick(0)
              }}
              className={style['upload-image-container']}
            >
              <Cloudinary />
            </div>
          </div>
        </div>

        <div className={style['side-images-relative']}>
          <div
            className={`${isSecondHovered ? style['other-img-container-hovered'] : style['other-img-container']}`}
            onMouseEnter={() => {
              setIsSecondHovered(true)
            }}
            onMouseLeave={() => {
              setIsSecondHovered(false)
            }}
          >
            <img className={style['second-image']} src={sellerdetail.images[1] ?? NotAvailableImage} alt={sellerdetail.sellerName} />
            <div
              onClick={(_e) => {
                void onClick(1)
              }}
              className={style['upload-image-container']}
            >
              <Cloudinary />
            </div>
          </div>
        </div>

        <div className={style['side-images-relative']}>
          <div
            className={`${isThirdHovered ? style['other-img-container-hovered'] : style['other-img-container']}`}
            onMouseEnter={() => {
              setIsThirdHovered(true)
            }}
            onMouseLeave={() => {
              setIsThirdHovered(false)
            }}
          >
            <img className={style['third-image']} src={sellerdetail.images[2] ?? NotAvailableImage} alt={sellerdetail.sellerName} />
            <div
              onClick={(_e) => {
                void onClick(2)
              }}
              className={style['upload-image-container']}
            >
              <Cloudinary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpdateBusinessImages
