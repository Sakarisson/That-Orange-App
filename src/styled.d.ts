// styled.d.ts
import 'styled-components';
import Color from './style/Color';
import { ThemeColors, ThemeName } from './style/theme/types';
declare module 'styled-components' {
  export interface NavigationTheme {
    dark: boolean;
    colors: {
      primary: Color;
      background: Color;
      card: Color;
      text: Color;
      border: Color;
      notification: Color;
    };
  }
  export interface DefaultTheme {
    name: ThemeName;
    colors: ThemeColors;
    navigation: NavigationTheme;
  }
}
