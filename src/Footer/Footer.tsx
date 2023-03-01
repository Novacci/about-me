import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles['footer-container']}>
        <p>Copyright © 2023 Novacci</p>
      </footer>
    </>
  );
};

export default Footer;
