import UsersCards from '../../components/UsersCards/UsersCards'
import SideBar from '../../components/SideBar/SideBar'
import { menuItems } from './parts/itemsmenu'
import { useState } from 'react'
import Metrics from '../../components/Metrics/Metrics'
import SellersCards from '../../components/SellersCards/SellersCards'
import ReportsList from '../../components/ReportsList/ReportsList'

const GlamourAdmin = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} menuItems={menuItems}/>
      <div>
      {activeItem === 'Users' && <UsersCards />}
      {activeItem === 'Analytics' && <Metrics />}
      {activeItem === 'Sellers' && <SellersCards />}
      {activeItem === 'Reports' && <ReportsList />}
      </div>
    </div>
  )
}

export default GlamourAdmin
