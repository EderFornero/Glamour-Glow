import SideBar from '../../components/SideBar/SideBar'
import SellerServices from './AdminParts/ServiceList'
import Clients from './AdminParts/Clients'
import FormSeller from '../../components/FormSeller/FormSeller'
import { useEffect, useState } from 'react'
import style from './AdminDashboard.module.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSellerbyId, getUsers } from '../../redux/actions'
import type { RootState } from '../../redux/types'
import type { ServiceProvider } from '../../interfaces'
import UpdateBusinessImages from './AdminParts/UpdateBusinessImages/UpdateBusinessImage'
import BusinessInfo from '../BusinessDetail/BusinessInfo/BusinessInfo'
import BusinessImages from '../BusinessDetail/BusinessImages/BusinessImages'
import Services from '../BusinessDetail/Services/Services'

const AdminDashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('')
  const dispatch = useDispatch()
  const { id } = useParams()
  const sellerdetail = useSelector((state: RootState) => state.sellerdetail) as ServiceProvider
  const users = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(getSellerbyId(id))
    dispatch(getUsers())
  }, [])

  return (
    <div className={style['div-sidebar-container']}>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} />
      <div className={style['right-section']}>
        {activeItem === 'Create' && <FormSeller />}
        {(activeItem === 'List' || activeItem === 'Services') && <SellerServices sellerid={sellerdetail.sellerid} services={sellerdetail.servicesArray} setActiveItem={setActiveItem} />}
        {activeItem === 'Clients' && <Clients sellerName='Hola' services={users} />}
        {activeItem === 'Interface' && <UpdateBusinessImages />}
        {activeItem === 'Display' && <div className={style['Display-business']}>
                                        <BusinessInfo sellerName={sellerdetail.sellerName} reviews={sellerdetail.reviews} />
                                        <BusinessImages />
                                        <Services sellerId={id as string} services={sellerdetail.servicesArray} /></div>}
      </div>
    </div>
  )
}

export default AdminDashboard
