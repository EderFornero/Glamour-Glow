import UsersCards from '../../components/UsersCards/UsersCards'
import SideBar from '../../components/SideBar/SideBar'
import { menuItems } from './parts/itemsmenu'
import { useState, useEffect } from 'react'
import Metrics from '../../components/Metrics/Metrics'
import SellersCards from '../../components/SellersCards/SellersCards'
import ReportsList from '../../components/ReportsList/ReportsList'
import Payments from '../../components/Payments/Payments'
import { useNavigate } from 'react-router-dom'

const GlamourAdmin = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const rol = localStorage.getItem('role')
    if (rol !== 'admin') {
      navigate(-1)
    }
  }, [])

  return (
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} menuItems={menuItems}/>
      <div>
      {activeItem === 'Users' && <UsersCards />}
      {activeItem === 'Analytics' && <Metrics />}
      {activeItem === 'Sellers' && <SellersCards />}
      {activeItem === 'Reports' && <ReportsList />}
      {activeItem === 'Payments' && <Payments />}
      </div>
    </div>
  )
}

export default GlamourAdmin
