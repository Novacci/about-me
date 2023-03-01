import React from 'react';
import styles from './Header.module.scss';
import { MdOutlineLightMode } from 'react-icons/md';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.name}>Wojciech Nowak</div>
        <button className={styles['header-button']}>
          <div>
            <MdOutlineLightMode />
          </div>
        </button>
      </div>
    </>
  );
};

export default Header;
