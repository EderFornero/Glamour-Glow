import styles from '../UserDetailDestructure.module.css'
// assets
import facebook from '../../../assets/UserDetail/facebook.svg'
import google from '../../../assets/UserDetail/google.svg'
const UserDetailSocialMedia = (): JSX.Element => {
  return (
    <div className={styles['right-socials']}>
    <div className={styles['socials-header']}>
        <h4>My Social Media Connections</h4>
        <p>Link your social media profiles for easy access to your Glamour Glow account.</p>
    </div>
    <div className={styles['socials-body']}>
        <div className={styles['socials-icon']}>
            <div className={styles['socials-icon-left']}><img src={facebook} /> <span>Facebook</span></div>
            <a>Connect</a>
        </div>
        <div className={styles['socials-icon']}>
            <div className={styles['socials-icon-left']}><img src={google} /> <span>Google</span></div>
            <a>Connect</a>
        </div>
    </div>
</div>
  )
}

export default UserDetailSocialMedia
