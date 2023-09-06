import { useParams } from 'react-router-dom'
import useGetDetail from '../../hooks/useGetDetail'
import style from './BusinessDetail.module.css'
import Services from './Services/Services'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import Reviews from '../../components/Reviews/Reviews'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import BusinessImages from './BusinessImages/BusinessImages'

const BusinessDetail2 = (): JSX.Element => {
  const { id } = useParams()
  let usuario = null

  if (id !== undefined) {
    usuario = useGetDetail(+id)
  }
  return (
    <div className={style['global-container']}>
      <BusinessInfo usuario={usuario} />
      <BusinessImages />
      <Services services={usuario.services} />
      <LeaveAComment user={usuario} />
      <Reviews reviews={usuario.reviews} />
    </div>
  )
}

export default BusinessDetail2
