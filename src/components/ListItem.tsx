import React from 'react';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components';
import { Body, Subtitle } from '../style/typography/Typography';

const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
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

const ListItem = ({ label, sublabel }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      <InnerContainer>
        <Body>{label}</Body>
        <Subtitle color={colors.TEXT_SECONDARY}>{sublabel}</Subtitle>
      </InnerContainer>
      <Divider />
    </Container>
  );
};

export default ListItem;
