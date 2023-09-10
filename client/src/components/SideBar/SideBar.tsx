import styles from './SideBar.module.css'
import { menuItems } from './parts/itemsmenu'
import NavHeader from './parts/NavHeader'
import NavButton from './parts/NavButton'
import SubMenu from './parts/SubMenu'
import Icon from './parts/Icon'
import menu from '../../assets/sidebard-icons/menu.svg'
import { useState } from 'react'

function SideBar ({ setActiveItem, activeItem }: any): JSX.Element {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const handleClick = (item: string): void => {
    setActiveItem(item !== activeItem ? item : '')
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <button type="button" className={'sidebar-button'}
        onClick={toggleSidebar}>
          <Icon icon={menu} />
        </button>
        <span>Admin</span>
      </div>
      {menuItems.map((item) => (
        <>
          {item.items === undefined && (
            <NavButton
              key={item.id}
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={false}
            />
          )}
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
