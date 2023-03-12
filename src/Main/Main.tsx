import queryString from 'query-string';
import { Buffer } from 'buffer';
import MyImage from '../hi.png';
import { useState, useEffect, useContext } from 'react';
import styles from './Main.module.scss';
import { GithubIcon } from '../Icons/GithubIcon';
import { DiscordIcon } from '../Icons/DiscordIcon';
import { FacebookIcon } from '../Icons/FacebookIcon';
import { LinkedInIcon } from '../Icons/LinkedInIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';
import { SpotifyIcon } from '../Icons/SpotifyIcon';
import { RxArrowTopRight } from 'react-icons/rx';
import { RiRhythmFill } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';
import MapContext from '../Store/MapContext';

const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;

const basic = Buffer.from(
  `${spotify_client_id}:${spotify_client_secret}`
).toString('base64');

type TrackData = {
  name: string;
  artist: string;
};

const initialCurrentTrack = {
  artist: '',
  trackName: '',
  trackUrl: '',
};

const initialLastTrack = {
  lastPlayed: '',
  lastArtist: '',
  lastLink: '',
};

const Main = () => {
  const [track, setTrack] = useState<TrackData>({ name: '', artist: '' });
  const [isListening, setIsListening] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState(initialCurrentTrack);
  const [lastTrack, setLastTrack] = useState(initialLastTrack);
  const MapDisplay = useContext(MapContext);

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
        };
        setCurrentTrack(currentSongData);
        console.log('aktualna piosenka', currentSongData);
      } else {
        setCurrentTrack(initialCurrentTrack);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Fetching complited');
    }
  };

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
      };
      setLastTrack(lastPlayedData);
      console.log('ostatnia piosenka', lastPlayedData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentlyPlaying();
      getRecentlyPlayed();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles['flex-position']}>
        <div className={styles['about-me-container']}>
          <img
            className={styles['my-image-style']}
            src={MyImage}
            alt="My Image"
          ></img>
          <span>
            I am a self-taught programmer who aspires to develop skills which
            are related to Web development. Currently, I am focused on building
            projects where I use React, TypeScript, and SCSS.
          </span>
        </div>
        <div
          className={
            isListening ? styles['spotify-online'] : styles['spotify-container']
          }
        >
          <span
            className={
              isListening
                ? styles['spotify-main-icon-online']
                : styles['spotify-main-icon']
            }
          >
            <SpotifyIcon />
          </span>
          <div>
            <span className={styles['spotify-text']}>
              <span className={styles['spotify-music-icon']}>
                <RiRhythmFill />
              </span>
              {isListening ? `${'Now playing'}` : `${'Offline, Last Played'}`}
            </span>

            <div className={styles.title}>
              {isListening ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={currentTrack.trackUrl}
                >
                  {currentTrack.trackName}
                </a>
              ) : (
                <a rel="noreferrer" target="_blank" href={lastTrack.lastLink}>
                  {lastTrack.lastPlayed}
                </a>
              )}
            </div>
            <div className={styles.darkened}>
              {isListening
                ? `${currentTrack.artist}`
                : `${lastTrack.lastArtist}`}
            </div>
          </div>
        </div>
        <div className={styles['map-container']}>{MapDisplay}</div>
        <div className={styles['git-container']}>
          <div className={styles['buttons-grouping']}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Novacci"
            >
              <GithubIcon />
            </a>
            <a
              className={styles['git-arrow']}
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Novacci"
            >
              <div>
                <RxArrowTopRight />
              </div>
              <span className={styles.text}>Github.com</span>
            </a>
          </div>
          <div>
            <div className={styles.title}>GitHub</div>
            <span className={styles.darkened}>
              Click the button above to see my profile and check out my github
              projects.
            </span>
          </div>
        </div>
        <div className={styles['info-container']}>
          <div className={styles.title}>About Me:</div>
          <span>
            My name is Wojtek and I am a self-taught programmer who loves
            working with JavaScript technologies. Right now I am focused on
            learning everything that is related to Web Development. Now I am
            working on my projects that helps me improve my skills and get
            deeper into technologies like Next.js, Redux, Firebase and so on so
            In the future I can become a specialist as a React developer. In my
            free time, I do sports like playing football, practicing yoga, and
            working out in the gym. My dream is to visit South America and the
            Iberian Peninsula.
          </span>
        </div>
        <div className={styles['contact-container']}>
          <div className={styles.title}>Get in Touch</div>
          <span className={styles.darkened}>
            I am open to all inqueirs. Whether you have a question or just want
            to say hi, I will try my best to get back to you!
          </span>

          <a
            className={styles['contact-button-style']}
            rel="noreferrer"
            target="_blank"
            href="mailto:wojtekn00@gmail.com"
          >
            <FiSend />
            Contact me
          </a>
        </div>
        <div className={styles['links-container']}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://discordapp.com/users/247450566408536066"
          >
            <DiscordIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/wojtek.nowakxd"
          >
            <FacebookIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/novacci/"
          >
            <LinkedInIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/novacciq/"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className={styles['resume-container']}>
          <a
            className={styles['resume-arrow']}
            rel="noreferrer"
            target="_blank"
            href={`${process.env.PUBLIC_URL}WojciechNowak.pdf`}
          >
            <div>
              <RxArrowTopRight />
            </div>
            <span className={styles.text}>View Resume</span>
          </a>
          <div>
            <div className={styles.title}>Resume</div>
            <span className={styles.darkened}>
              By clicking this card you will be redirected to see my full
              resume.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
