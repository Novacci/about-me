import styles from '../../Main/Main.module.scss';
import SpotifyContent from '../SpotifyContent/SpotifyContent';
import { useState, useEffect } from 'react';
import SpotifySpinner from '../SpotifySpinner/SpotifySpinner';
import queryString from 'query-string';
import { Buffer } from 'buffer';

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
function Spotify() {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [loadingTrack, setIsLoadingTrack] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState(initialCurrentTrack);
  const [lastTrack, setLastTrack] = useState(initialLastTrack);

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

  //! --------------------------------------------------------------//

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
      setIsLoadingTrack(false);
    }
  };

  return (
    <>
      <div
        className={
          isListening ? styles['spotify-online'] : styles['spotify-container']
        }
      >
        {loadingTrack ? (
          <SpotifySpinner />
        ) : (
          <SpotifyContent
            isListening={isListening}
            currentTrack={currentTrack}
            lastTrack={lastTrack}
          />
        )}
      </div>
    </>
  );
}

export default Spotify;
