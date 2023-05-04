import styles from '../Main/Main.module.scss';
import MyImage from '../hi.png';

const AboutMe = () => {
  return (
    <>
      <div className={styles['about-me-container']}>
        <img
          className={styles['my-image-style']}
          src={MyImage}
          alt="My Image"
        ></img>
        <span>
          I am a self-taught programmer who aspires to develop skills which are
          related to Web development. Currently, I am focused on building
          projects where I use React, TypeScript, and SCSS.
        </span>
      </div>
    </>
  );
};

export default AboutMe;
