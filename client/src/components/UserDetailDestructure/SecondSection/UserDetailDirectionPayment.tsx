import styles from '../UserDetailDestructure.module.css'
// assets
import plus from '../../../assets/UserDetail/plus-circle.svg'
const DivDirectionsPaymentWays = (): JSX.Element => {
  return (
    <>
      <div className={styles['right-directions']}>
        <div className={styles['directions-header']}>
          <h4 className={styles['my-adress-h4']}>My Addresses</h4>
        </div>
        <div className={styles['directions-body']}>
          <img src={plus} className={styles.iconplussvg} /><a href="">Add a new address</a>
        </div>
      </div>

      <div className={styles['right-paymentways']}>
        <div className={styles['paymentways-header']}>
          <h4>My Payment Methods</h4>
          <p>Save your card details securely and pay without any issues.</p>
        </div>
        <div className={styles['paymentways-body']}>
          <img src={plus} className={styles.iconplussvg} /><a href="">Add payment method</a>
        </div>
      </div>
    </>
  )
}

export default DivDirectionsPaymentWays
