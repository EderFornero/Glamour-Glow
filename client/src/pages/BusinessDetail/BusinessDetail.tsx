import { useParams } from 'react-router-dom'
import style from './BusinessDetail.module.css'
import Services from './Services/Services'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import Reviews from '../../components/Reviews/Reviews'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import BusinessImages from './BusinessImages/BusinessImages'
import type { RootState } from '../../redux/types'
import { useEffect } from 'react'
import { getSellerbyId, updateSellerInfo } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

const BusinessDetail2 = (): JSX.Element => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const sellerdetail = useSelector((state: RootState) => state.sellerdetail)

  useEffect(() => {
    dispatch(getSellerbyId(id))
  }, [dispatch])

  return (
    <div className={style['global-container']}>
      <BusinessInfo sellerdetail={sellerdetail} />
      {/* <Services services={sellerdetail.servicesArray}/> */}
      {/* <Reviews reviews={sellerdetail.reviews}/>
      {<BusinessImages />
      <LeaveAComment /> */}
    </div>
  )
}

export default BusinessDetail2
