import styles from '../../Main/Main.module.scss';
import { GithubIcon } from '../../Icons/GithubIcon';
import { RxArrowTopRight } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';

const Github = () => {
  return (
    <>
      <div className={styles['git-container']}>
        <div className={styles['buttons-grouping']}>
          <a rel="noreferrer" target="_blank" href="https://github.com/Novacci">
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
    </>
  );
};

export default Github;
