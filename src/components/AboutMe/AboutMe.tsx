import { Center, Grid, Image, Text, Title } from '@mantine/core';

import './AboutMe.css';

export function AboutMe() {
  return (
    <div className="AboutMe" style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Title style={{ textAlign: 'center', marginBottom: '10px' }}>About Me</Title>
      <Grid className="AboutMeContainer">
        <Grid.Col
          className="AboutMeLeftContainer"
          span={{ base: 12, md: 6 }}
          style={{ display: 'flex', alignItems: 'stretch' }}
        >
          <Image src="./src/Images/self.jpg" className="imagebox" />
        </Grid.Col>

        <Grid.Col
          className="AboutMeRightContainer"
          span={{ base: 12, md: 6 }}
          style={{ display: 'flex', alignItems: 'stretch' }}
        >
          <Center className="textbox">
            <Text className="responsive-text">
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