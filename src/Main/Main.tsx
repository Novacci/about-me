import styles from './Main.module.scss';
import Map from '../Map/Map';
import Github from '../components/GitHub';
import AboutMe from '../components/AboutMe';
import Info from '../components/Info';
import Contact from '../components/Contact';
import MySocials from '../components/MySocials';
import Resume from '../components/Resume';
import Spotify from '../components/Spotify';

const Main = () => {
  return (
    <>
      <div className={styles['flex-position']}>
        <AboutMe />
        <Spotify />
        <Map />
        <Github />
        <Info />
        <Contact />
        <MySocials />
        <Resume />
      </div>
    </>
  );
};

export default Main;
