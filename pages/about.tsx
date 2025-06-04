import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Alex Cyber</h1>
        <div className={styles.subtitle}>Cybersecurity Student</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hello! I&apos;m a cybersecurity student passionate about network
              security, penetration testing and digital forensics. I enjoy
              exploring how things work under the hood and securing them.
            </p>
            <p className={styles.paragraph}>
              My studies revolve around securing web applications and building
              tools that help detect vulnerabilities. I love learning new
              security techniques and applying them in personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I&apos;m currently pursuing a degree in cybersecurity and
              participating in my university&apos;s security club. I often take
              part in Capture The Flag competitions and collaborate with peers
              on security research projects.
            </p>
            <p className={styles.paragraph}>
              Recently, I completed an internship focused on vulnerability
              assessment where I helped audit web applications and improve their
              overall security posture.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I enjoy sharing write-ups on{' '}
              <span className={styles.highlight}>DEV.to</span> and my personal
              blog about the latest security tools and techniques I&apos;ve been
              experimenting with.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not digging into security concepts, you&apos;ll find me
              tinkering with retro hardware or enjoying a session of
              competitive CTFs with friends.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
