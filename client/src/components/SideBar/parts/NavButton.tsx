import { FC } from 'react';
import styles from '../Sidebar.module.css';
import arrowup from '../../../assets/sidebard-icons/arrow-up.svg';
import arrowdown from '../../../assets/sidebard-icons/arrow-down.svg';
import Icon from './Icon';
import { Link } from 'react-router-dom';

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => (
  <button
    type="button"
    onClick={() => {
      onClick(name);
    }}
    className={`${isActive ? styles.active : ''}`}
  >
    {icon && <Icon icon={icon} />}
    <span>
      {name === 'Home' ? (
        <Link className={styles['home-link']} to="/">
          {name}
        </Link>
      ) : (
        name
      )}
    </span>
    {hasSubNav && (
      <img
        className={styles['arrow-icon']}
        src={isActive ? arrowup : arrowdown}
      />
    )}
  </button>
);

export default NavButton;