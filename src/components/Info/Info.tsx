import styles from '../../Main/Main.module.scss';
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles['info-container']}>
        <div className={styles.title}>{t('about-title')}</div>
        <span>{t('info')}</span>
      </div>
    </>
  );
};

export default Info;
