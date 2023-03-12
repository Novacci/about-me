import styles from './App.module.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ThemeContext from './Store/ThemeContext';
import MapContext from './Store/MapContext';
import { useState } from 'react';
import Map from './Map/Map';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={styles['div-background-color']} data-theme={theme}>
          <Header />
          <MapContext.Provider value={<Map />} />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
