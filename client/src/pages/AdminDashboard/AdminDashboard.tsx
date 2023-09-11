import SideBar from '../../components/SideBar/SideBar'
import FormSeller from '../../components/FormSeller/FormSeller'
import { useState } from 'react'
import style from './AdminDashboard.module.css'

const AdminDashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div>
      <SideBar setActiveItem={setActiveItem} activeItem={activeItem}/>
      <div className={style['right-section']}>
      {activeItem === 'Create' && <FormSeller />}
      </div>
    </div>
  )
}

export default AdminDashboard
