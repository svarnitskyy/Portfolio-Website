import '@mantine/core/styles.css';

import { Container, MantineProvider } from '@mantine/core';
import { shadcnCssVariableResolver } from '@/cssVariableResolver';
import { Router } from './Router';
import { shadcnTheme } from './theme';

import './styles.css';
import '@fontsource/geist-sans';

export default function App() {
  return (
    <MantineProvider
      forceColorScheme="dark"
      theme={shadcnTheme}
      cssVariablesResolver={shadcnCssVariableResolver}
    >
      <Container  size="xl">
        <Router />
      </Container>
    </MantineProvider>
  );
}
