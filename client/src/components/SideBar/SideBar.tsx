import { FC, useRef, useState } from 'react';
import styles from './Sidebar.module.css'

import calendar from '../../assets/sidebard-icons/calendar.svg'
import dashboard from '../../assets/sidebard-icons/dashboard.svg'
import message from '../../assets/sidebard-icons/messages.svg'
import services from '../../assets/sidebard-icons/services.svg'
import settings from '../../assets/sidebard-icons/settings.svg'
import users from '../../assets/sidebard-icons/users.svg'
import menu from '../../assets/sidebard-icons/menu.svg'
import arrowup from '../../assets/sidebard-icons/arrow-up.svg'
import arrowdown from '../../assets/sidebard-icons/arrow-down.svg'

const menuItems = [
  {
    name: 'Home',
    icon: dashboard
  },
  {
    name: 'Settings',
    icon: settings,
    items: ['Display', 'Interface']
  },
  {
    name: 'Services',
    icon: services,
    items: ['List', 'Create', 'Edit']
  },
  {
    name: 'Calendar',
    icon: calendar
  },
  {
    name: 'Clients',
    icon: users
  },
  {
    name: 'Messages',
    icon: message
  }
]

type Item = {
  name: string
  items: string[]
}

type ButtonProps = {
  onClick: (item: string) => void
  name: string
  icon?: string
  isActive: boolean
  hasSubNav?: boolean
}

type SubMenuProps = {
  item: Item
  activeItem: string
  handleClick: (args0: string) => void
}

const Icon = ({ icon }: { icon: string }) => (
  <img className={styles['sidebar-icon']} src={icon} />
)

const NavHeader = () => (
  <header className={styles['sidebar-header']}>
    <button type='button'>
      <Icon icon={menu} />
    </button>
    <span>Admin</span>
  </header>
)

const NavButton: FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav
}) => (
  <button
    type='button'
    onClick={() => { onClick(name) }}
    className={`${isActive ? styles.active : ''}`}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && (
      <img
        className={styles['arrow-icon']}
        src={isActive ? arrowup : arrowdown}
      />
    )}
  </button>
);

const SubMenu: FC<SubMenuProps> = ({ item, activeItem, handleClick }) => {
  const navRef = useRef<HTMLDivElement>(null)

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem

  return (
    <div
      className={`${styles['sub-nav']} ${isSubNavOpen(item.name, item.items) ? styles.open : ''}`} // Usa los estilos de módulos
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight
      }}
    >
      <div ref={navRef} className={styles['sub-nav-inner']}> 
        {item?.items.map((subItem) => (
          <NavButton
            key={item.name}
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  )
}

function SideBar() {
  const [activeItem, setActiveItem] = useState<string>('')

  const handleClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : '')
  }

  return (
    <aside className={styles.sidebar}> 
      <NavHeader />
      {menuItems.map((item) => (
        <>
          {!item.items && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </>
      ))}
    </aside>
  )
}

export default SideBar
