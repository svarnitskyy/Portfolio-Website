import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { shadcnCssVariableResolver } from '@/cssVariableResolver';
import { Router } from './Router';
import { shadcnTheme } from './theme';

import './styles.css';
import '@fontsource/geist-sans';


import { Navbar } from '@/components/NavBar/NavBar';

export default function App() {
  return (
    <MantineProvider
      forceColorScheme="dark"
      theme={shadcnTheme}
      cssVariablesResolver={shadcnCssVariableResolver}
    >
      <Navbar />
      <Router />
    </MantineProvider>
  );
}
