import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'alexcyber.dev',
    href: 'https://alexcyber.dev',
  },
  {
    social: 'email',
    link: 'alex@cyber.dev',
    href: 'mailto:alex@cyber.dev',
  },
  {
    social: 'github',
    link: 'alexcyber',
    href: 'https://github.com/alexcyber',
  },
  {
    social: 'linkedin',
    link: 'alexcyber',
    href: 'https://www.linkedin.com/in/alexcyber/',
  },
  {
    social: 'twitter',
    link: 'alex_cyber',
    href: 'https://twitter.com/alex_cyber',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
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
