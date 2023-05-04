import styles from '../Main/Main.module.scss';

const Info = () => {
  return (
    <>
      <div className={styles['info-container']}>
        <div className={styles.title}>About Me:</div>
        <span>
          My name is Wojtek and I am a self-taught programmer who loves working
          with JavaScript technologies. Right now I am focused on learning
          everything that is related to Web Development. Now I am working on my
          projects that helps me improve my skills and get deeper into
          technologies like Next.js, Redux, Firebase and so on so In the future
          I can become a specialist as a React developer. In my free time, I do
          sports like playing football, practicing yoga, and working out in the
          gym. My dream is to visit South America and the Iberian Peninsula.
        </span>
      </div>
    </>
  );
};

export default Info;
