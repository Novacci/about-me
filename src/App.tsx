import React from 'react';
import styles from './App.module.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ThemeContext from './Store/ThemeContext';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{ backgroundColor: theme ? '#f7f2f2' : 'rgb(9 12 16)' }}>
          <Header />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

// <div style={{ backgroundColor: theme ? '#f7f2f2' : 'rgb(9 12 16)' }}></div>
