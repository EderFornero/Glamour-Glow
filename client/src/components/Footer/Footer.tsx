import styles from './Footer.module.css'
import { FooterLogo } from '../../Images/LogoImages'
import { Link } from 'react-router-dom'

function Fotter (): JSX.Element {
  return (
    <footer className={styles.footer}>
      <section className={styles.footertopwrapper}>
        <section className={styles.footertop}>
          <img className={styles.logo} src={FooterLogo} title='Logo' alt='Logo' />
        </section>
      </section>
      <div className={styles.separator}></div>
      <section className={styles.footermiddlewrapper}>
        <section>
          <menu>
            <h2>Work Team</h2>
            <li>
              <a href='https://www.linkedin.com/in/giovannicespedes/' target='_blank' rel='noreferrer'>
                Giovanni Cespedes
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/lautaro-bascoy-34586126a/' target='_blank' rel='noreferrer'>
                Lautaro Bascoy
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/eder-fornero/' target='_blank' rel='noreferrer'>
                Eder Fornero
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/lucas-martin-cubile/' target='_blank' rel='noreferrer'>
                Lucas Cubile
              </a>
            </li>
          </menu>
        </section>
        <section>
          <menu>
            <h2 className={styles['dot-display-h']}>.</h2>
            <li>
              <a href='https://www.linkedin.com/in/lola-pernigotti-589830276/' target='_blank' rel='noreferrer'>
                Lola Pernigotti
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/sebastian-loda-8a94b3275/' target='_blank' rel='noreferrer'>
                Sebastian Loda
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/moibaldenegro/' target='_blank' rel='noreferrer'>
                Moises Baldenegro
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ricardo-carrera-silva-546199276/' target='_blank' rel='noreferrer'>
                Ricardo Carrera
              </a>
            </li>
          </menu>
        </section>
        <section>
          <menu>
            <h2>Company</h2>
            <li>
              <Link to='/know/us'>About Us</Link>
            </li>
          </menu>
        </section>
      </section>
      <section className={styles.footerbottom}>
        <small>© Glamour Glow 2023 All rights reserved</small>
      </section>
    </footer>
  )
}

export default Fotter
