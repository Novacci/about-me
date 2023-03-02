import React from 'react';
import styles from './Header.module.scss';
import { MdOutlineLightMode } from 'react-icons/md';
import { useState, useContext } from 'react';
import ThemeContext from '../Store/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeHandler = () => {
    setTheme((prevTheme) => !theme);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.name}>Wojciech Nowak</div>
        <button
          onClick={changeThemeHandler}
          className={styles['header-button']}
        >
          <div>
            <MdOutlineLightMode />
          </div>
        </button>
      </div>
    </>
  );
};

export default Header;
