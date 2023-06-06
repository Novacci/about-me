import styles from '../../Main/Main.module.scss';
import MyImage from '../../assets/hi.png';
import { useTranslation } from 'react-i18next';
const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles['about-me-container']}>
        <img
          className={styles['my-image-style']}
          src={MyImage}
          alt="My Image"
        ></img>
        <span>{t('about')}</span>
      </div>
    </>
  );
};

export default AboutMe;
