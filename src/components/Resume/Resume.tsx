import styles from '../../Main/Main.module.scss';
import { RxArrowTopRight } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  return (
    <>
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
          <span className={styles.text}>{t('resume-button')}</span>
        </a>
        <div>
          <div className={styles.title}>{t('resume-title')}</div>
          <span className={styles.darkened}>{t('resume')}</span>
        </div>
      </div>
    </>
  );
};

export default Resume;
