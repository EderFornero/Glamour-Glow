import UsersCards from '../../components/UsersCards/UsersCards'
import SideBar from '../../components/SideBar/SideBar'
import { menuItems } from './parts/itemsmenu'
import { useState } from 'react'
// import Metrics from '../../components/Metrics/Metrics'

const GlamourAdmin = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} menuItems={menuItems}/>
      <div>
      {activeItem === 'Users' && <UsersCards />}
      {/* {activeItem === 'Analytics' && <Metrics />} */}
      </div>
    </div>
  )
}

export default GlamourAdmin
