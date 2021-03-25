import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import Color from '../style/Color';

const Container = styled(View)`
  background-color: ${Color.BACKGROUND};
`;

const InnerContainer = styled(View)`
  padding: 16px 8px;
  flex-direction: column;
`;

const Divider = styled(View)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.DIVIDER};
`;

type Props = {
  label: string;
  sublabel?: string;
};

const ListItem = ({ label, sublabel }: Props) => (
  <Container>
    <InnerContainer>
      <Text style={{ color: Color.TEXT_PRIMARY }}>{label}</Text>
      <Text style={{ color: Color.TEXT_SECONDARY }}>{sublabel}</Text>
    </InnerContainer>
    <Divider />
  </Container>
);

export default ListItem;
