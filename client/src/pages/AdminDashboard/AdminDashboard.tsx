import SideBar from '../../components/SideBar/SideBar'
import ServiceList from './AdminParts/ServiceList'
import RequestPayout from '../../components/RequestPayout/RequestPayout'
import Report from '../../components/Report/Report'
import Clients from './AdminParts/Clients'
import FormSeller from '../../components/FormSeller/FormSeller'
import { useEffect, useState } from 'react'
import style from './AdminDashboard.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSellerbyId, getUsers } from '../../redux/actions'
import type { RootState } from '../../redux/types'
import type { ServiceProvider } from '../../interfaces'
import UpdateBusinessImages from './AdminParts/UpdateBusinessImages/UpdateBusinessImage'
import BusinessInfo from '../BusinessDetail/BusinessInfo/BusinessInfo'
import BusinessImages from '../BusinessDetail/BusinessImages/BusinessImages'
import Services from '../BusinessDetail/Services/Services'
import { menuItems } from '../../components/SideBar/parts/itemsmenu'

const AdminDashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Settings')
  const [isReportPopupOpen, setIsReportPopupOpen] = useState<boolean>(false)
  const closeReportPopup = (): void => {
    setIsReportPopupOpen(false)
  }

  const dispatch = useDispatch()
  const { id } = useParams()
  const ID = localStorage.getItem('id')
  const sellerdetail = useSelector((state: RootState) => state.sellerdetail) as ServiceProvider
  const accountBalance = useSelector((state: RootState) => state.accountBalance)
  const users = useSelector((state: RootState) => state.clients)
  const navigate = useNavigate()

  useEffect(() => {
    if (id !== null) {
      if (id !== ID) {
        navigate('/')
      }
    }
    dispatch(getSellerbyId(id))
    dispatch(getUsers())
  }, [])

  return (
    <div className={style['div-sidebar-container']}>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} menuItems={menuItems} />
      <div className={style['right-section']}>
        {activeItem === 'Request Payout' && <RequestPayout accountBalance={accountBalance} sellerName={sellerdetail.sellerName} sellerPhone={sellerdetail.sellerPhone} />}
        {activeItem === 'Report' && <Report id={ID} onClose={closeReportPopup} isOpen={isReportPopupOpen} route='sellers' />}
        {activeItem === 'Create' && <FormSeller setActiveItem={setActiveItem} />}
        {(activeItem === 'List' || activeItem === 'Services') && <ServiceList setActiveItem={setActiveItem} sellerid={''} />}
        {activeItem === 'Clients' && <Clients clients={users} id={id}/>}
        {activeItem === 'Interface' && <UpdateBusinessImages />}
        {(activeItem === 'Display' || activeItem === 'Settings' || activeItem === '') && (
          <div className={style['Display-business']}>
            <BusinessInfo sellerName={sellerdetail.sellerName} reviews={sellerdetail.reviews} sellerId={undefined} favourites={[]} />
            <BusinessImages />
            <Services sellerId={id as string} services={sellerdetail.servicesArray} />
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
