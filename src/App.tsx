import styles from './App.module.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ThemeContext from './Store/ThemeContext';
import useLocalStorage from 'use-local-storage';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={styles['div-background-color']} data-theme={theme}>
          <Header />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
