// hooks
import { useAboutUsData } from '../../hooks/index'
// css
import './AboutUs.css'
// svg
import GitHubSvg from '../../assets/AboutSvg/Github'
import LinkedInSvg from '../../assets/AboutSvg/LinkedInSvg'
const AboutUs = (): JSX.Element => {
  const aboutUsData = useAboutUsData()
  return (
    <div className='div-container-about'>
      <div className='get-to-know-us'>
        <h2>Get to know us!</h2>
      </div>
      <div className='card-container'>
        {aboutUsData.map(us => (
          <>
            <div className="card" key={us.id}>
              <div className="card-info">
                <div><img src={us.image} className="card-avatar"/></div>
                <div className="card-title">{us.name}</div>
                <div className="card-subtitle">FullStack Developer</div>
              </div>
              <div className='card-description'>
                <p>{us.description}</p>
              </div>
              <div className="card-social">
                  <a href={us.linkedin} target='_blank' rel='noreferrer'><li className='card-social__item'><LinkedInSvg /></li></a>
                  <a href={us.github} target='_blank' rel='noreferrer'><li className='card-social__item'><GitHubSvg /></li></a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default AboutUs
