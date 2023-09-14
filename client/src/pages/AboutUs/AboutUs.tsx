import { useAboutUsData } from '../../hooks/index'
import styles from './AboutUs.module.css'

import GitHubSvg from '../../assets/AboutSvg/GitHub'
import LinkedInSvg from '../../assets/AboutSvg/LinkedInSvg'

const AboutUs = (): JSX.Element => {
  const aboutUsData = useAboutUsData()

  return (
    <div className={styles['div-container-about']}>
      <div className={styles['get-to-know-us']}>
        <h2>Get to know us!</h2>
      </div>
      <div>
      <div className={styles['card-container']}>
        {aboutUsData.map((us) => (
          <div className={styles['card-about']} key={us.id}>
            <div className={styles['card-about-info']}>
              <div>
                <img src={us.image} className={styles['card-avatar']} />
              </div>
              <div className={styles['card-about-title']}>{us.name}</div>
              <div className={styles['card-about-subtitle']}>
                FullStack Developer
              </div>
            </div>
            <div className={styles['card-about-description']}>
              <p>{us.description}</p>
            </div>
            <div className={styles['card-about-social']}>
              <a href={us.linkedin} target="_blank" rel="noreferrer">
                <li className={styles['card-social__item']}>
                  <LinkedInSvg />
                </li>
              </a>
              <a href={us.github} target="_blank" rel="noreferrer">
                <li className={styles['card-social__item']}>
                  <GitHubSvg />
                </li>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default AboutUs
