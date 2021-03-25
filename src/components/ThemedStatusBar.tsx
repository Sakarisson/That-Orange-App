import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { useTheme } from 'styled-components';
import { ThemeName } from '../style/theme/types';

const getBarStyle = (themeName: ThemeName): StatusBarStyle => {
  switch (themeName) {
    case 'dark':
      return 'light-content';
    default:
      return 'light-content';
  }
};

const ThemedStatusBar = () => {
  const theme = useTheme();
  return <StatusBar barStyle={getBarStyle(theme.name)} />;
};

export default ThemedStatusBar;
