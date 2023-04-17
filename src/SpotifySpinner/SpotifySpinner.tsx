import styles from './SpotifySpinner.module.scss';
import { SpotifyIcon } from '../Icons/SpotifyIcon';

const SpotifySpinner = () => {
  return (
    <>
      <div className={styles[`spotify-logo`]}>
        <SpotifyIcon />
      </div>
    </>
  );
};

export default SpotifySpinner;
