import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <div className={styles['flex-position']}>
        <div className={styles['about-me-container']}>
          <p>
            I am a self-taught programmer who aspires to develop skills which
            are related to Web development. Currently, I am focused on building
            projects where I use React, TypeScript, and SCSS
          </p>
        </div>
        <div className={styles['spotify-container']}>Spotify</div>
        <div className={styles['map-container']}>Miejsce na Mapke</div>
        <div className={styles['git-container']}>
          <div className={styles.title}>GitHub</div>
          <span className={styles.darkened}>
            Click the button above to see my profile and check out my github
            projects
          </span>
        </div>
        <div className={styles['info-container']}>About Me:</div>
        <div className={styles['contact-container']}>Get in Touch</div>
        <div className={styles['links-container']}>Linki</div>
        <div className={styles['resume-container']}>Resume</div>
      </div>
    </>
  );
};

export default Main;
