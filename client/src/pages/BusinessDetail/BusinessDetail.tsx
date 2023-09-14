import { useParams } from 'react-router-dom'
import style from './BusinessDetail.module.css'
import Services from './Services/Services'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import Reviews from '../../components/Reviews/Reviews'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import BusinessImages from './BusinessImages/BusinessImages'
import type { RootState } from '../../redux/types'
import { useEffect, useState } from 'react'
import { cleanSellerDetail, getSellerbyId } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import approved from '../../assets/approved.svg'
import failure from '../../assets/failure.svg'
import type { ServiceProvider } from '../../interfaces'
import { paymentConfirmation, sendSellerEmail } from '../../utils'

interface Notification {
  isOpen: boolean
  type: 'approved' | 'failure' | null
  content: string
}

const BusinessDetail = (): JSX.Element => {
  const dispatch = useDispatch()

  const { id } = useParams()
  const sellerdetail = useSelector((state: RootState) => state.sellerdetail) as ServiceProvider
  const userdetail = useSelector((state: RootState) => state.userdetail)
  const [notification, setNotification] = useState<Notification>({
    isOpen: false,
    type: null,
    content: ''
  })

  useEffect(() => {
    dispatch(getSellerbyId(id))
    const urlParams = new URLSearchParams(window.location.search)
    const status = urlParams.get('status')
    if (status === 'approved') {
      setNotification({
        content: 'Payment approved',
        isOpen: true,
        type: 'approved'
      })
      const { productPrice, productName } = useParams()
      paymentConfirmation(userdetail.email, productPrice, sellerdetail.sellerEmail, sellerdetail.sellerPhone, sellerdetail.sellerName, productName)
      sendSellerEmail(userdetail.email, productPrice, sellerdetail.sellerEmail, userdetail.phoneNumber, `${userdetail.name} ${userdetail.lastName}`, productName)
    } else if (status === 'failure') {
      setNotification({
        content: 'Payment failed',
        isOpen: true,
        type: 'failure'
      })
    }
    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: ''
      })
    }, 3000)

    return () => dispatch(cleanSellerDetail())
  }, [id])

  return (
    <div className={style['global-container']}>
      <BusinessInfo sellerName={sellerdetail.sellerName} reviews={sellerdetail.reviews} sellerId={id} favourites={userdetail.favorites} />
      <BusinessImages />
      <Services sellerId={id as string} services={sellerdetail.servicesArray} />
      <LeaveAComment userId={localStorage.getItem('id')} />
      <Reviews reviews={sellerdetail.reviews} />
      {notification.isOpen && (
        <div className={style.notification}>
          <div className={style['icon-container']} style={{ backgroundColor: notification.type === 'approved' ? '#00cc99' : '#ee4646' }}>
            <img src={notification.type === 'approved' ? approved : failure} alt='' width={25} height={25} />
          </div>
          <p>{notification.content}</p>
        </div>
      )}
    </div>
  )
}

export default BusinessDetail
