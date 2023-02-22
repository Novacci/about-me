import React from 'react';
import styles from './Header.module.scss';
import { MdOutlineLightMode } from 'react-icons/md';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.name}>Wojciech Nowak</div>
        <div className={styles.circle}>
          <button className={styles['header-button']}>
            <MdOutlineLightMode />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
