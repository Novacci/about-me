import styles from '../Main/Main.module.scss';
import { RxArrowTopRight } from 'react-icons/rx';

const Resume = () => {
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
          <span className={styles.text}>View Resume</span>
        </a>
        <div>
          <div className={styles.title}>Resume</div>
          <span className={styles.darkened}>
            By clicking this card you will be redirected to see my full resume.
          </span>
        </div>
      </div>
    </>
  );
};

export default Resume;
