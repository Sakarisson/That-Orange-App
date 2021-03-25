import { Text } from 'react-native';
import styled from 'styled-components';
import Color from '../Color';

type DefaultTextProps = {
  color?: Color;
};

const DefaultText = styled(Text)<DefaultTextProps>`
  color: ${({ color, theme }) => (color ? color : theme.colors.TEXT_PRIMARY)};
  font-weight: normal;
`;

export const Body = styled(DefaultText)`
  font-size: 16px;
  line-height: 20px;
`;

export const Subtitle = styled(DefaultText)`
  font-size: 14px;
  line-height: 20px;
`;
