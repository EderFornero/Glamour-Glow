import UsersCards from '../../components/UsersCards/UsersCards'
import SideBar from '../../components/SideBar/SideBar'
import { menuItems } from './parts/itemsmenu'
import { useState } from 'react'

const GlamourAdmin = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem} menuItems={menuItems}/>
      <div>
      {activeItem === 'Users' && <UsersCards />}
      </div>
    </div>
  )
}

export default GlamourAdmin
