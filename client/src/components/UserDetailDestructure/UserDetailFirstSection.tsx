// components
import Cloudinary from '../../components/Cloudinary/Cloudinary'
// assets
import noProfileImage from '../../assets/UserDetail/no-profile-image.png'
// css
import styles from './UserDetailDestructure.module.css'
// redux
import type { RootState } from '../../redux/types'
import { useSelector } from 'react-redux'
const UserDetailFirstSection = (): JSX.Element => {
  const { image } = useSelector((state: RootState) => state)
  return (
    <section className={styles.sectionleft}>
    <div className={styles.userdetail}>
        <div className={styles['userdetail-header']}>
            <img src={image ?? noProfileImage} alt='Profile' />
            <Cloudinary />
            <h1>Full Name</h1>
            <a>Edit basic information</a>
        </div>
        <div className={styles['userdetail-body']}>
            <ul>
                <li>Name <span>Giovanni</span></li>
                <li>Full Name <span>Cespedes</span></li>
                <li>Phone <span>955 804 941</span></li>
                <li>Email <span>giovannice22@hotmail.com</span></li>
                <li>Birthdate <span>22/09/2002</span></li>
                <li>Gender <span>Male</span></li>
            </ul>
        </div>
        <div className={styles['userdetail-bottom']}>
            <a>Sign Out</a>
        </div>
    </div>
</section>
  )
}

export default UserDetailFirstSection
