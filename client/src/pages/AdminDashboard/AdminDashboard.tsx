import SideBar from '../../components/SideBar/SideBar'
import FormSeller from '../../components/FormSeller/FormSeller'
import { useState } from 'react'

const AdminDashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem}/>
      {activeItem === 'Create' && <FormSeller />}
    </div>
  )
}

export default AdminDashboard
