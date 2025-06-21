import { useTypewriter } from 'react-simple-typewriter';
import { Center, Text, Title } from '@mantine/core';

export function Welcome() {
  const [text] = useTypewriter({
    words: ['Hey! My name is Svyatoslav but you can call me Svet. I am a software engineer.'],
    typeSpeed: 50,
    delaySpeed: 500,
    loop: 1,
  });

  function renderWithGradient(input: string) {
    const svyIndex = input.indexOf('Svyatoslav');
    const svetIndex = input.indexOf('Svet');

    if (svyIndex === -1 && svetIndex === -1) {
      return input;
    }

    const elements = [];

    let currentIndex = 0;

    while (currentIndex < input.length) {
      if (svyIndex === currentIndex) {
        elements.push(
          <Text
            key="svy"
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'red', to: 'green' }}
          >
            Svyatoslav
          </Text>
        );
        currentIndex += 'Svyatoslav'.length;
      } else if (svetIndex === currentIndex) {
        elements.push(
          <Text
            key="svet"
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'green', to: 'blue' }}
          >
            Svet
          </Text>
        );
        currentIndex += 'Svet'.length;
      } else {
        elements.push(input[currentIndex]);
        currentIndex++;
      }
    }

    return elements;
  }

  return (
    <Center style={{ height: '100vh' }} id="top">
      <Title ta="center" mt={100}>
        {renderWithGradient(text)}
      </Title>
    </Center>
  );
}
