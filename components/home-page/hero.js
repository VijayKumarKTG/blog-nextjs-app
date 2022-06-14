import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={`/images/site/max.png`}
          alt='Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&#39;m Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Angular.
      </p>
    </section>
  );
};

export default Hero;
