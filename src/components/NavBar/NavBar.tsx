import {Button, Grid, Group, Image, Divider} from '@mantine/core';

export function Navbar() {
  return (
      <div style={{justifyItems: 'center', position: 'sticky', zIndex: 10000, width: '100%', top: '0px', backdropFilter: 'blur(5px)'}}>
          <div style={{width:'100%'}}>
              <Grid align='center'>
                  <Grid.Col span="auto" style={{ textAlign: 'left', marginLeft: '100px' }}>
                      <Button variant="subtle">
                          <Image src="./src/favicon.svg" h={50} fit="contain" />
                      </Button>
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <Group justify="center">
                          <a href="#top"><Button variant="subtle">Home</Button></a>
                          <Button variant="subtle">Experience</Button>
                          <Button variant="subtle">Projects</Button>
                      </Group>
                  </Grid.Col>
                  <Grid.Col span="auto" style={{ textAlign: 'right', marginRight: '100px' }}>
                      <Button variant="subtle">Contact</Button>
                  </Grid.Col>
              </Grid>
              <Divider />
          </div>
      </div>
  );
}
