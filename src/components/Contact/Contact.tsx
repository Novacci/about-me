import styles from '../../Main/Main.module.scss';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <>
      <div className={styles['contact-container']}>
        <div className={styles.title}>Get in Touch</div>
        <span className={styles.darkened}>
          I am open to all inqueirs. Whether you have a question or just want to
          say hi, I will try my best to get back to you!
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
    </>
  );
};

export default Contact;
