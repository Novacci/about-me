import styles from './Main.module.scss';
import { GithubIcon } from '../Icons/GithubIcon';
import { DiscordIcon } from '../Icons/DiscordIcon';
import { FacebookIcon } from '../Icons/FacebookIcon';
import { LinkedInIcon } from '../Icons/LinkedInIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';

// const SPOTIFY_TOKEN = process.env.

const Main = () => {
  // const lastSongPlayedData = () => {
  //   fetch('https://api.spotify.com/v1/me/player/recently-played')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

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
          <div className={styles.title}>Spotify</div>
        </div>
        <div className={styles['map-container']}>Miejsce na Mapke</div>
        <div className={styles['git-container']}>
          <div className={styles.title}>GitHub</div>
          <span>
            <GithubIcon />
          </span>
          <span className={styles.darkened}>
            Click the button above to see my profile and check out my github
            projects
          </span>
        </div>
        <div className={styles['info-container']}>
          <div className={styles.title}>About Me:</div>
          <span>
            My name is Wojtek and I am a self-taught programmer who loves
            working with JavaScript technologies. Right now I am focused on
            learning everything that is related to Web Development. Now I am
            working on my projects that helps me improve me skills and get
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
            to say hi, I will try my best to get back to you
          </span>
          <button>Contact me</button>
        </div>
        <div className={styles['links-container']}>
          <a>
            <DiscordIcon />
          </a>
          <a href="https://www.facebook.com/wojtek.nowakxd">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/in/novacci/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/novacciq/">
            <InstagramIcon />
          </a>
        </div>
        <div className={styles['resume-container']}>
          <div className={styles.title}>Resume</div>
          <span className={styles.darkened}>
            By clicking this card you will be redirected to see my full resume.
          </span>
        </div>
      </div>
    </>
  );
};

export default Main;
