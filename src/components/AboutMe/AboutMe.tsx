import { Center, Grid, Image, Text, Title } from '@mantine/core';
import styles from './AboutMe.module.css';


export function AboutMe() {
  return (
    <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Title style={{ textAlign: 'center', marginBottom: '10px' }}>About Me</Title>
      <Grid className="AboutMeContainer">
        <Grid.Col
          className={styles.AboutMeLeftContainer}
          span={{ base: 12, md: 6 }}
          style={{ display: 'flex', alignItems: 'stretch' }}
        >
          <Image src="/Portfolio-Website/Images/self.JPG" className={styles.imagebox} />
        </Grid.Col>

        <Grid.Col
          className={styles.AboutMeRightContainer}
          span={{ base: 12, md: 6 }}
          style={{ display: 'flex', alignItems: 'stretch' }}
        >
          <Center className={styles.textbox}>
            <Text className={styles.responsiveText}>
              I'm a recent software engineering graduate from Iowa State University with a strong
              passion for full-stack development, especially building web applications. I’ve
              completed two internships at John Deere, served as treasurer of the Iowa State
              hackathon club, and was honored as a Garmin Scholar. I’ve also been named to the
              College of Engineering Dean’s List every semester. One of my proudest projects is the
              HEBSE Binary Star Query App, which I built to help researchers explore astronomical
              data more efficiently. <br /> <br />
              Outside of coding, I enjoy traveling, listening to music, taking care of plants,
              collecting mechanical keyboards, and constantly exploring new technologies. I’m
              currently seeking full-time opportunities where I can contribute to impactful software
              and continue growing as a full-stack developer.
            </Text>
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
}