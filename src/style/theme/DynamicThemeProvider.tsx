import React, { useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Color from '../Color';
import { darkThemeColors } from './Themes';
import { ThemeColors, ThemeName } from './types';

type Props = {
  children: JSX.Element;
};

const getThemeColors = (themeName: ThemeName): ThemeColors => {
  switch (themeName) {
    case 'dark':
      return darkThemeColors;
    default:
      return darkThemeColors;
  }
};

const DynamicThemeProvider = ({ children }: Props) => {
  const theme = useMemo<DefaultTheme>(() => {
    const themeName = 'dark';
    const themeColors = getThemeColors(themeName);
    return {
      name: themeName,
      colors: themeColors,
      navigation: {
        dark: themeName === 'dark',
        colors: {
          primary: Color.LIGHT_BLUE,
          background: themeColors.BACKGROUND,
          card: themeColors.BACKGROUND,
          text: themeColors.TEXT_PRIMARY,
          border: themeColors.TEXT_SECONDARY,
          notification: themeColors.TEXT_PRIMARY,
        },
      },
    };
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DynamicThemeProvider;
