import styles from './SideBar.module.css'
import { menuItems } from './parts/itemsmenu'
import NavButton from './parts/NavButton'
import SubMenu from './parts/SubMenu'
import Icon from './parts/Icon'
import menu from '../../assets/sidebard-icons/menu.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface SideBarProps {
  setActiveItem: (item: string) => void
  activeItem: string
}

const SideBar: React.FC<SideBarProps> = ({ setActiveItem, activeItem }) => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)

  const handleClick = (item: string): void => {
    setActiveItem(item !== activeItem ? item : '')
  }

  const toggleSidebar = (): void => {
    setSidebarVisible(!sidebarVisible)
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <Link to='/'>
          <button type='button' className={styles['sidebar-button']} onClick={toggleSidebar}>
            <Icon icon={menu} />
            <p>Home</p>
          </button>
        </Link>
      </div>
      {menuItems.map((item) => (
        <>
          {item.items === undefined && <NavButton key={item.id} onClick={handleClick} name={item.name} icon={item.icon} isActive={activeItem === item.name} hasSubNav={false} />}
          {item.items !== undefined && (
            <>
              <NavButton onClick={handleClick} name={item.name} icon={item.icon} isActive={activeItem === item.name} hasSubNav={true} />
              <SubMenu activeItem={activeItem} handleClick={handleClick} item={item} />
            </>
          )}
        </>
      ))}
    </aside>
  )
}

export default SideBar
