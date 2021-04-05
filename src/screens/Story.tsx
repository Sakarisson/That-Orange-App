import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { AppStackParamList } from '../navigation/AppNavigator';
import Routes from '../navigation/Routes';
import { Body } from '../style/typography/Typography';

const Container = styled(View)``;

type Props = {
  route: RouteProp<AppStackParamList, Routes.STORY>;
};

const Story = ({ route }: Props) => {
  console.log(route.params.id);
  return (
    <Container>
      <Body>{route.params.id}</Body>
    </Container>
  );
};

export default Story;
