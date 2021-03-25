import React from 'react';
import { Pressable, View } from 'react-native';
import styled, { useTheme } from 'styled-components';
import { Body, Subtitle } from '../style/typography/Typography';

const Container = styled(View)`
  padding: 16px 8px;
  flex-direction: column;
`;

type Props = {
  label: string;
  sublabel?: string;
  onPress?: () => void;
};

const ListItem = ({ label, sublabel, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.4 : 1 })}>
      <Container>
        <Body>{label}</Body>
        <Subtitle color={colors.TEXT_SECONDARY}>{sublabel}</Subtitle>
      </Container>
    </Pressable>
  );
};

export default ListItem;
