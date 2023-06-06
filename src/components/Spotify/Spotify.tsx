import styles from '../../Main/Main.module.scss';
import { useState, useEffect } from 'react';
import { SpotifyIcon } from '../../Icons/SpotifyIcon';
import { RiRhythmFill } from 'react-icons/ri';
import queryString from 'query-string';
import { Buffer } from 'buffer';
import { useTranslation } from 'react-i18next';

const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;

const basic = Buffer.from(
  `${spotify_client_id}:${spotify_client_secret}`
).toString('base64');

const initialCurrentTrack = {
  artist: '',
  trackName: '',
  trackUrl: '',
  currentImage: '',
};

const initialLastTrack = {
  lastPlayed: '',
  lastArtist: '',
  lastLink: '',
  lastImage: '',
};

const Spotify = () => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState(initialCurrentTrack);
  const [lastTrack, setLastTrack] = useState(initialLastTrack);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentlyPlaying();
      getRecentlyPlayed();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getAccessToken = async () => {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    return response.json();
  };

  const getCurrentlyPlaying = async () => {
    try {
      const { access_token } = await getAccessToken();
      const response = await fetch(
        `https://api.spotify.com/v1/me/player/currently-playing`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const data = await response.json();
      setIsListening(data.is_playing);
      if (data.is_playing) {
        const currentSongData = {
          artist: data.item.artists[0].name,
          trackName: data.item.name,
          trackUrl: data.item.external_urls.spotify,
          currentImage: data.item.album.images[0].url,
        };
        setCurrentTrack(currentSongData);
      } else {
        setCurrentTrack(initialCurrentTrack);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Fetching current song complited');
    }
  };

  // --------------------------------------------------------------//

  const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/me/player/recently-played`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const data = await response.json();
      const lastPlayedData = {
        lastPlayed: data.items[0].track.name,
        lastArtist: data.items[0].track.artists[0].name,
        lastLink: data.items[0].track.external_urls.spotify,
        lastImage: data.items[0].track.album.images[0].url,
      };
      setLastTrack(lastPlayedData);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Fetching last song complited');
    }
  };

  return (
    <>
      <div
        className={
          isListening ? styles['spotify-online'] : styles['spotify-container']
        }
      >
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
      </div>
    </>
  );
};

export default Spotify;
