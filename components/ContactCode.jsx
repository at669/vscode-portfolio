import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'amandatrang.vercel.app',
  //   href: 'https://amandatrang.vercel.app',
  // },
  // {
  //   social: 'email',
  //   link: 'a@a.a',
  //   href: 'mailto:a@a.a',
  // },
  {
    social: 'linkedin',
    link: 'amandatrang',
    href: 'https://www.linkedin.com/in/amandatrang/',
  },
  {
    social: 'itch.io',
    link: 'amango',
    href: 'https://amango.itch.io/',
  },
  {
    social: 'github',
    link: 'at669',
    href: 'https://github.com/at669',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
