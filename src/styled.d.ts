// styled.d.ts
import 'styled-components';
import { ThemeColors, ThemeName } from './style/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName;
    colors: ThemeColors;
  }
}
