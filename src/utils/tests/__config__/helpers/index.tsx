import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

type SetupReturn<T> = {
  state: T;
  ui: (props?: Partial<T>) => React.ReactElement;
} & ReturnType<typeof render>;

export function createSetupToTests<T = Record<string, unknown>>(
  mockProps: T,
  Component: React.FC<T>,
  options?: RenderOptions
) {
  return function setup(props?: Partial<T>): SetupReturn<T> {
    const mock: T = {
      ...mockProps,
      ...props
    };
    const ui = (componentProps: Partial<T> = {}) => {
      const finalMock = {
        ...mock,
        ...componentProps
      };

      return (
        <ThemeProvider theme={theme}>
          <Component {...finalMock} />
        </ThemeProvider>
      );
    };

    return { state: mock, ui, ...render(ui(mock), options) };
  };
}
