import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { shadcnTheme } from '@/theme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={shadcnTheme} env="test">
        {children}
      </MantineProvider>
    ),
  });
}
