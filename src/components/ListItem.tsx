import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import Color from '../style/Color';

const Container = styled(View)`
  background-color: ${Color.BACKGROUND};
`;

const InnerContainer = styled(View)`
  padding: 8px;
`;

const Divider = styled(View)`
  height: 1px;
  background-color: ${Color.DIVIDER};
`;

type Props = {
  label: string;
};

const ListItem = ({ label }: Props) => (
  <Container>
    <InnerContainer>
      <Text style={{ color: Color.TEXT_PRIMARY }}>{label}</Text>
    </InnerContainer>
    <Divider />
  </Container>
);

export default ListItem;
