import styles from '../UserDetailDestructure.module.css'

const UserDetailNotification = (): JSX.Element => {
  return (
    <div className={styles['right-notifications']}>
                    <div className={styles['notifications-header']}>
                        <h4>My Notifications</h4>
                        <p>We will send you updates about your appointments, news, and marketing offers.</p>
                    </div>
                    <div className={styles['notifications-body']}>
                        <div className={styles['notification-style']}>
                            <div>
                                <h5>Appointment Notifications via SMS</h5>
                                <p>You will receive SMS messages according to the sender&apos;s settings.</p>
                            </div>
                            <span className={styles.switch}>
                                <input id="switch1" type="checkbox" />
                                <label htmlFor="switch1"></label>
                            </span>
                        </div>
                        <div className={styles['notification-style']}>
                            <div>
                                <h5>Marketing Notifications via Email</h5>
                                <p>You will receive marketing emails with exciting offers.</p>
                            </div>
                            <span className={styles.switch}>
                                <input id="switch2" type="checkbox" />
                                <label htmlFor="switch2"></label>
                            </span>
                        </div>
                    </div>
                </div>
  )
}

export default UserDetailNotification
