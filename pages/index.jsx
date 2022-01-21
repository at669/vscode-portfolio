import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>AMANDA</h1>
          <h1>TRANG</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Amanda Trang</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
      {/* <!-- Default Statcounter code for amandatrang.vercel.app
      https://amandatrang.vercel.app/ --> */}
      <script type="text/javascript">
      var sc_project=12704287;
      var sc_invisible=1;
      var sc_security="c61ef56e";
      </script>
      <script type="text/javascript"
      src="https://www.statcounter.com/counter/counter.js"
      async></script>
      <noscript><div class="statcounter"><a title="Web Analytics"
      href="https://statcounter.com/" target="_blank"><img
      class="statcounter"
      src="https://c.statcounter.com/12704287/0/c61ef56e/1/"
      alt="Web Analytics"
      referrerPolicy="no-referrer-when-downgrade"/></a></div></noscript>
      {/* <!-- End of Statcounter Code --> */}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
