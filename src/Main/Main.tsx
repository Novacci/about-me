import styles from './Main.module.scss';
import Map from '../Map/Map';
import Github from '../components/GitHub/GitHub';
import AboutMe from '../components/AboutMe/AboutMe';
import Info from '../components/Info/Info';
import Contact from '../components/Contact/Contact';
import MySocials from '../components/MySocials/MySocials';
import Resume from '../components/Resume/Resume';
import Spotify from '../components/SpotifyContent/SpotifyContent';
import SpotifyContent from '../components/Spotify/Spotify';

const Main = () => {
  return (
    <>
      <div className={styles['flex-position']}>
        <AboutMe />
        <SpotifyContent />
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
