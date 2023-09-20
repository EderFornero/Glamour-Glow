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
import type { ServiceProvider } from '../../interfaces'
import { sendSellerEmail, paymentConfirmation, postTransaction } from '../../utils'
import toast, { Toaster } from 'react-hot-toast'

const BusinessDetail = (): JSX.Element => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { id } = useParams()
  const queryParams = new URLSearchParams(location.search)
  const price = queryParams.get('price')
  const service = queryParams.get('service')
  const transactionId = queryParams.get('payment_id')
  const status = queryParams.get('status')
  const sellerdetail = useSelector((state: RootState) => state.sellerdetail) as ServiceProvider
  const userdetail = useSelector((state: RootState) => state.userdetail)
  const sendEmailRef = useRef(0)

  const sendEmail = async (): Promise<any> => {
    try {
      await paymentConfirmation(userdetail.email, price, sellerdetail.sellerEmail, sellerdetail.sellerPhone, sellerdetail.sellerName, service)
      await sendSellerEmail(userdetail.email, price, sellerdetail.sellerEmail, userdetail.phoneNumber, `${userdetail.name} ${userdetail.lastName}`, service)
      await postTransaction(transactionId, userdetail._id, sellerdetail._id, price, status)
      toast.success('Purchase successful, check your e-mail', {
        style: {
          border: '1px solid #3d36be',
          padding: '16px',
          color: '#1eb66d'
        },
        iconTheme: {
          primary: '#6e66ff',
          secondary: '#FFFAEE'
        }
      })
    } catch (error) {
      toast.error('An error occurred while purchasing', {
        style: {
          border: '1px solid #3d36be',
          padding: '16px',
          color: 'red'
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE'
        }
      })
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
      sendEmail()
    }
  }, [id, userdetail])
  return (
    <div className={style['global-container']}>
      <Toaster />
      <BusinessInfo sellerName={sellerdetail.sellerName} reviews={sellerdetail.reviews} sellerId={id} favourites={userdetail.favorites} />
      <BusinessImages />
      <Services sellerId={id as string} services={sellerdetail.servicesArray} />
      <LeaveAComment userId={localStorage.getItem('id')} />
      <Reviews reviews={sellerdetail.reviews} />
    </div>
  )
}

export default BusinessDetail
