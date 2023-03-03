import React from 'react';
import styles from './App.module.scss';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ThemeContext from './Store/ThemeContext';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');

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
