import check from '../../assets/description-icons/check.svg'
// css
import styles from './Description.module.css'
// features
import { useFeatures } from '../../hooks/index'
// images
import { Landing, Landing2, Landing3, Landing4 } from '../../Images/LandingImages'
import StandardButton from '../StandardButton/StandardButton'
// router dom
import { useNavigate } from 'react-router-dom'

function Description (): JSX.Element {
  const ecommerceFeatures = useFeatures()
  return (
    <main className={styles['first-main-description']}>
      <section className={styles['box-header']} id="header">
        <div className={styles['text-header']}>
          <h1>
            <b>Unlock Your Styling Journey</b>
          </h1>
          <p>
            Elevate your styling business to new heights with our cutting-edge
            ecommerce platform. Connect with clients, gain reputation, and shine
            in the world of fashion.
          </p>
        </div>

        <div className={styles['img-header']}>
          <img src={Landing} alt={Landing} />
        </div>
      </section>

      <section className={styles['box-features']} id="linkFeatures">
        <h3>Features</h3>
        <div className={styles.features}>
          {ecommerceFeatures.map((service, i) => (
            <div className={styles['card-features']} key={i}>
              <span className={styles['icon-refresh']}>
                <img src={service.icon} alt={service.title} />
              </span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function Description2 (): JSX.Element {
  const navigate = useNavigate()
  const goToBusinessLogin = (): void => {
    navigate('/businessLogin')
  }
  return (
    <main className={styles['second-main-description']}>
      <section className={styles['box-call-to-actions']}>
        <div className={styles['call-to-actions']}>
          <div className={styles['img-call-to-actions']}>
            <img src={Landing2} alt={Landing2} />
          </div>

          <article className={styles.content}>
            <h3>Unlock Your Stylist Potential</h3>
            <p>
              Elevate your styling business to new heights. Gain reputation,
              connect directly with clients, and showcase your remarkable talent
              to a global audience. With our platform, you&apos;re not just a
              stylist; you&apos;re a trendsetter, a creator, and a fashion
              influencer.
            </p>

            <ul>
              <li>
                {' '}
                <img className={styles['icon-check']} src={check} /> Boost your
                credibility and visibility in the fashion world.
              </li>
              <li>
                {' '}
                <img className={styles['icon-check']} src={check} /> Establish
                direct communication and build lasting relationships.
              </li>
            </ul>

            <div className={styles['box-card-call-to-actions']}>
              <div className={styles['card-call-to-actions']}>
                <div className={styles['box-profesional']}>
                  <div className={styles['img-profesional']}>
                    <img src={Landing4} alt={Landing4} />
                  </div>
                  <div className={styles['datos-profesional']}>
                    <h5>Lucas Cubile</h5>
                    <h6>Co-Founder, Apple</h6>
                  </div>
                </div>
                <p>
                  &quot;Unlock endless opportunities in the fashion industry.
                  Connect with clients, showcase your skills, and watch your
                  styling business thrive.&quot;
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles['box-about']} id="linkAbout">
        <h3>About Us</h3>

        <div className={styles.about}>
          <div className={styles['img-about']}>
            <img src={Landing3} alt={Landing3} />
          </div>

          <article className={styles['contenido-about']}>
            <h3>Your Styling Journey Starts Here</h3>
            <p>
              Elevate your styling career to new heights with our innovative
              platform. Gain more clients, enhance your skills, and become a
              sought-after fashion influencer.
            </p>
            <StandardButton variant='sizePagination' onClick={goToBusinessLogin}>
              Learn More
            </StandardButton>
          </article>
        </div>
      </section>
    </main>
  )
}

export { Description, Description2 }
