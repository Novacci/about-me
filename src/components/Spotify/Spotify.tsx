import styles from '../../Main/Main.module.scss';
import { SpotifyIcon } from '../../Icons/SpotifyIcon';
import { RiRhythmFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

type SpotifyProps = {
  isListening: boolean;
  lastTrack: any;
  currentTrack: any;
};

const Spotify = (props: SpotifyProps) => {
  const { isListening, currentTrack, lastTrack } = props;

  const { t } = useTranslation();

  return (
    <>
      <div className={styles['icon-image-position']}>
        <span
          className={
            isListening
              ? styles['spotify-main-icon-online']
              : styles['spotify-main-icon']
          }
        >
          <SpotifyIcon />
        </span>
        <div className={styles['song-images']}>
          {isListening ? (
            <img src={currentTrack.currentImage} alt={'Current Song Image'} />
          ) : (
            <img src={lastTrack.lastImage} alt={'Last Song Image'} />
          )}
        </div>
      </div>
      <div style={{ zIndex: '1002' }}>
        <span className={styles['spotify-text']}>
          <span className={styles['spotify-music-icon']}>
            <RiRhythmFill />
          </span>
          {isListening
            ? `${t('spotify-now-playing')}`
            : `${`Offline, ${t('spotify-last-played')}`}`}
        </span>

        <div className={styles.title}>
          {isListening ? (
            <a rel="noreferrer" target="_blank" href={currentTrack.trackUrl}>
              {currentTrack.trackName}
            </a>
          ) : (
            <a rel="noreferrer" target="_blank" href={lastTrack.lastLink}>
              {lastTrack.lastPlayed}
            </a>
          )}
        </div>
        <div className={styles.darkened}>
          {isListening ? `${currentTrack.artist}` : `${lastTrack.lastArtist}`}
        </div>
      </div>
    </>
  );
};

export default Spotify;
