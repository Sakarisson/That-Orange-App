import Color from '../Color';

enum ThemeColorKey {
  TEXT_PRIMARY = 'TEXT_PRIMARY',
  TEXT_SECONDARY = 'TEXT_SECONDARY',
  BACKGROUND = 'BACKGROUND',
  DIVIDER = 'DIVIDER',
}

export type ThemeColors = {
  [key in ThemeColorKey]: Color;
};

export type ThemeName = 'dark';
