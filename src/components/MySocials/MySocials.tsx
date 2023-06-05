import styles from '../../Main/Main.module.scss';
import { DiscordIcon } from '../../Icons/DiscordIcon';
import { FacebookIcon } from '../../Icons/FacebookIcon';
import { LinkedInIcon } from '../../Icons/LinkedInIcon';
import { InstagramIcon } from '../../Icons/InstagramIcon';

const MySocials = () => {
  return (
    <>
      <div className={styles['links-container']}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://discordapp.com/users/247450566408536066"
        >
          <DiscordIcon />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/wojtek.nowakxd"
        >
          <FacebookIcon />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/novacci/"
        >
          <LinkedInIcon />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/novacciq/"
        >
          <InstagramIcon />
        </a>
      </div>
    </>
  );
};

export default MySocials;
