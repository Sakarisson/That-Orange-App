import { View } from 'react-native';
import styled from 'styled-components';

const Divider = styled(View)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.DIVIDER};
`;

export default Divider;
