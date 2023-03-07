import React from 'react';
import { useState, useEffect } from 'react';
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

// const SPOTIFY_TOKEN = process.env.REACT_APP_SPOTIFY_TOKEN;
const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

type TrackData = {
  name: string;
  artist: string;
};

const Main = () => {
  const [track, setTrack] = useState<TrackData>({ name: '', artist: '' });

  const AuthRequest = async () => {
    const response = await fetch(
      `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read`,
      {
        mode: 'no-cors',
      }
    );

    console.log(response);
  };

  console.log(AuthRequest());

  // useEffect(() => {
  //   const lastSongPlayedData = () => {
  //     fetch('https://api.spotify.com/v1/me/player/recently-played', {
  //       headers: {
  //         authorization: `Bearer BQBjMJfeVlV9ET6DC0kbDnSF57yGS9IVgpp_YiuO0Um8lB7IaiIr3KHotgUp9XXSUTlwjidNI9BxGw2FdvT_POYxWJJSf2_bI0kg47wzaoKXF2xWpuzWH2TREmTWHe_MMgulwgbb9sxhNaicPR71MF_u79iOmyCuZHiqNOG8V_YQMcIs`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) =>
  //         setTrack({
  //           name: data.items[0].track.name,
  //           artist: data.items[0].track.artists[0].name,
  //         })
  //       );
  //   };
  //   lastSongPlayedData();
  //   console.log(track);
  // }, []);

  return (
    <>
      <div className={styles['flex-position']}>
        <div className={styles['about-me-container']}>
          <span>
            I am a self-taught programmer who aspires to develop skills which
            are related to Web development. Currently, I am focused on building
            projects where I use React, TypeScript, and SCSS
          </span>
        </div>
        <div className={styles['spotify-container']}>
          <span className={styles['spotify-main-icon']}>
            <SpotifyIcon />
          </span>
          <div>
            <span className={styles['spotify-text']}>
              <span className={styles['spotify-music-icon']}>
                <RiRhythmFill />
              </span>
              Offline, Last Played
            </span>

            <div className={styles.title}>{track.name}</div>
            <div className={styles.darkened}>{track.artist}</div>
          </div>
        </div>
        <div className={styles['map-container']}>Miejsce na Mapke</div>
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
