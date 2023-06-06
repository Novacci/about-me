import styles from './Header.module.scss';
import { MdOutlineLightMode } from 'react-icons/md';
import { useContext } from 'react';
import ThemeContext from '../Store/ThemeContext';
import SelectLang from '../components/SelectLang/SelectLang';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.name}>Wojciech Nowak</div>
        <div className={styles['header-child-position']}>
          <SelectLang />
          <button
            onClick={changeThemeHandler}
            className={styles['header-button']}
          >
            <div>
              <MdOutlineLightMode />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
