import styles from '../Sidebar.module.css';
import Icon from './Icon';
import menu from '../../../assets/sidebard-icons/menu.svg';

const NavHeader = () => (
  <div className={styles['sidebar-header']}>
    <button type="button">
      <Icon icon={menu} />
    </button>
    <span>Admin</span>
  </div>
);

export default NavHeader;
