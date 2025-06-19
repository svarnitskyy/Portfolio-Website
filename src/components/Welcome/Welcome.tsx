import { Text, Title } from '@mantine/core';

export function Welcome() {
  return (
    <>
      <Title ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Svyatoslav Varnitskyy
        </Text>
      </Title>
    </>
  );
}
