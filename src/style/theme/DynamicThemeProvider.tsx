import React, { useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkThemeColors } from './Themes';

type Props = {
  children: JSX.Element;
};

const DynamicThemeProvider = ({ children }: Props) => {
  const theme = useMemo<DefaultTheme>(
    () => ({
      name: 'dark',
      colors: darkThemeColors,
    }),
    [],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DynamicThemeProvider;
