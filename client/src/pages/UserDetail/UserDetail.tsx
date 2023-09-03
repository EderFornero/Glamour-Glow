import React from 'react'
import styles from './UserDetail.module.css'
import Carousel from '../../components/Carousel/Carousel'
import image from '/ProfileImages/giovanni-profile.jpg'
import facebook from '../../assets/UserDetail/facebook.svg'
import google from '../../assets/UserDetail/google.svg'
import plus from '../../assets/UserDetail/plus-circle.svg'

function UserDetail() {
    return (
        <div className={styles.section}>
            <section className={styles.sectionleft}>
                <div className={styles.userdetail}>
                    <div className={styles['userdetail-header']}>
                        <img src={image} alt='' />
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

            <section className={styles.sectionrigth}>
                <div className={styles['rigth-directions']}>
                    <div className={styles['directions-header']}>
                        <h4>My Addresses</h4>
                    </div>
                    <div className={styles['directions-body']}>
                        <img src={plus} className={styles.iconplussvg} /><a href="">Add a new address</a>
                    </div>
                </div>

                <div className={styles['rigth-paymentways']}>
                    <div className={styles['paymentways-header']}>
                        <h4>My Payment Methods</h4>
                        <p>Save your card details securely and pay without any issues.</p>
                    </div>
                    <div className={styles['paymentways-body']}>
                        <img src={plus} className={styles.iconplussvg} /><a href="">Add payment method</a>
                    </div>
                </div>

                <div className={styles['rigth-socials']}>
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

                <div className={styles['rigth-notifications']}>
                    <div className={styles['notifications-header']}>
                        <h4>My Notifications</h4>
                        <p>We will send you updates about your appointments, news, and marketing offers.</p>
                    </div>
                    <div className={styles['notifications-body']}>
                        <div className={styles['notification-style']}>
                            <div>
                                <h5>Appointment Notifications via SMS</h5>
                                <p>You will receive SMS messages according to the sender's settings.</p>
                            </div>
                            <span className={styles['switch']}>
                                <input id="switch1" type="checkbox" />
                                <label htmlFor="switch1"></label>
                            </span>
                        </div>
                        <div className={styles['notification-style']}>
                            <div>
                                <h5>Marketing Notifications via Email</h5>
                                <p>You will receive marketing emails with exciting offers.</p>
                            </div>
                            <span className={styles['switch']}>
                                <input id="switch2" type="checkbox" />
                                <label htmlFor="switch2"></label>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles['rigth-favorites']}>
                    <div className={styles['favorites-header']}>
                        <h4>Favorite Services</h4>
                        <p>Services you've liked</p>
                    </div>
                    <div className={styles['favorites-body']}>
                        <div>Carousel</div>
                    </div>
                </div>

                <div className={styles['rigth-delete']}>
                    <div className={styles['delete-header']}>
                        <h4>Delete Account</h4>
                        <p>Are you sure you want to delete this account?</p>
                    </div>
                    <div className={styles['delete-body']}>
                        <a href="">Delete Account</a>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default UserDetail