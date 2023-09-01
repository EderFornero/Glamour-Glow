import { FC, useRef, useState } from 'react';
import styles from '../Sidebar.module.css';

const Icon = ({ icon }: { icon: string }) => (
  <img className={styles['sidebar-icon']} src={icon} />
);

export default Icon;
