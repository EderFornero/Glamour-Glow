import { FC, useRef, useState } from 'react';
import styles from './Sidebar.module.css'
import { menuItems } from './parts/itemsmenu';
import NavHeader from './parts/NavHeader';
import NavButton from './parts/NavButton';
import SubMenu from './parts/SubMenu';

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
