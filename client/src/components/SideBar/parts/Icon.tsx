import styles from '../SideBar.module.css'

const Icon = ({ icon }: { icon: string }): JSX.Element => (
  <img className={styles['sidebar-icon']} src={icon} />
)

export default Icon
