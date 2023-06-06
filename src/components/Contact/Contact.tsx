import styles from '../../Main/Main.module.scss';
import { FiSend } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles['contact-container']}>
        <div className={styles.title}>{t('contact-title')}</div>
        <span className={styles.darkened}>{t('contact')}</span>

        <a
          className={styles['contact-button-style']}
          rel="noreferrer"
          target="_blank"
          href="mailto:wojtekn00@gmail.com"
        >
          <FiSend />
          <span>{t('contact-button')}</span>
        </a>
      </div>
    </>
  );
};

export default Contact;
