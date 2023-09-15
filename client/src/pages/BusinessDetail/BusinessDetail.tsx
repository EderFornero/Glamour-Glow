import { useParams, useLocation } from 'react-router-dom'
import style from './BusinessDetail.module.css'
import Services from './Services/Services'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import Reviews from '../../components/Reviews/Reviews'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import BusinessImages from './BusinessImages/BusinessImages'
import type { RootState } from '../../redux/types'
import { useEffect, useRef } from 'react'
import { cleanSellerDetail, getSellerbyId } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
// import approved from '../../assets/approved.svg'
// import failure from '../../assets/failure.svg'
import type { ServiceProvider } from '../../interfaces'
import { sendSellerEmail, paymentConfirmation } from '../../utils'

// interface Notification {
//   isOpen: boolean
//   type: 'approved' | 'failure' | null
//   content: string
// }

const BusinessDetail = (): JSX.Element => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { id } = useParams()
  const queryParams = new URLSearchParams(location.search)
  const price = queryParams.get('price')
  const service = queryParams.get('service')
  const sellerdetail = useSelector((state: RootState) => state.sellerdetail) as ServiceProvider
  const userdetail = useSelector((state: RootState) => state.userdetail)
  const sendEmailRef = useRef(0)

  const sendEmail = async (): Promise<any> => {
    try {
      console.log(userdetail.email, price, sellerdetail.sellerEmail, sellerdetail.sellerPhone, sellerdetail.sellerName, service, 'ACA ESTA EL CONSOLE LOG')
      await paymentConfirmation(userdetail.email, price, sellerdetail.sellerEmail, sellerdetail.sellerPhone, sellerdetail.sellerName, service)
      await sendSellerEmail(userdetail.email, price, sellerdetail.sellerEmail, userdetail.phoneNumber, `${userdetail.name} ${userdetail.lastName}`, service)
    } catch (error) {
      console.log('SALIO TODO HORRENDO')
    }
  }
  useEffect(() => {
    dispatch(getSellerbyId(id))

    return () => dispatch(cleanSellerDetail())
  }, [id])

  useEffect(() => {
    dispatch(getSellerbyId(id))
    const urlParams = new URLSearchParams(window.location.search)
    const status = urlParams.get('status')
    sendEmailRef.current++
    if (status === 'approved' && sendEmailRef.current === 3) {
      // Execute sendEmail only if the ref counter is 1
      sendEmail()
    }
  }, [id, userdetail])
  return (
    <div className={style['global-container']}>
      <BusinessInfo sellerName={sellerdetail.sellerName} reviews={sellerdetail.reviews} sellerId={id} favourites={userdetail.favorites} />
      <BusinessImages />
      <Services sellerId={id as string} services={sellerdetail.servicesArray} />
      <LeaveAComment userId={localStorage.getItem('id')} />
      <Reviews reviews={sellerdetail.reviews} />
    </div>
  )
}

export default BusinessDetail
