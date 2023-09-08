import { FC, useRef } from 'react'
import styles from '../SideBar.module.css'
import NavButton from './NavButton'

type Item = {
  name: string
  items: string[]
}

type SubMenuProps = {
  item: Item
  activeItem: string
  handleClick: (args0: string) => void
}

const SubMenu: FC<SubMenuProps> = ({ item, activeItem, handleClick }) => {
  const navRef = useRef<HTMLDivElement>(null)

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem

  return (
    <div
      className={`${styles['sub-nav']} ${
        isSubNavOpen(item.name, item.items) ? styles.open : ''
      }`} // Usa los estilos de módulos
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

export default SubMenu
