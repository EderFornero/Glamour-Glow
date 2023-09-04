import style from "./BusinessImages.module.css"
import imagetest1 from '../../../Images/imagenes testeo/Imgtest1.avif'
import imagetest2 from '../../../Images/imagenes testeo/imagetest2.avif'
import imagetest3 from '../../../Images/imagenes testeo/imgtest3.avif'

const BusinessImages = (): JSX.Element => {
    return (
        <div className={style.images}>
            <div className={style['main-img-container']}>
                <img src={imagetest3} alt="" className={style['main-img']} />
            </div>
            <div className={style['side-images']}>
                <img src={imagetest1} alt="" />
                <img src={imagetest2} alt="" />
            </div>
        </div>
    )
}
export default BusinessImages