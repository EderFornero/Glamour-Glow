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
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} />
      <div className={style['right-section']}>
        {activeItem === 'Create' && <FormSeller />}
        {activeItem === 'List' || (activeItem === 'Services' && <SellerServices sellerName={sellerdetail.sellerName} services={sellerdetail.servicesArray} setActiveItem={setActiveItem} />)}
        {activeItem === 'Clients' && <Clients services={users} />}
      </div>
    </div>
  )
}

export default AdminDashboard
