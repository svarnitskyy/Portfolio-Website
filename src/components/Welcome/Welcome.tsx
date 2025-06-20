import {Box, Text, Title} from '@mantine/core';

export function Welcome() {
  return (
    <Box>
      <Title ta="center" mt={100}>
          Hey! My name is {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Svet.
        </Text>
          {' '}I am a software engineer.
      </Title>
    </Box>
  );
}
