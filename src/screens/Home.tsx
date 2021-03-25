import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import ListItem from '../components/ListItem';

const Container = styled(View)``;

const Home = () => (
  <Container>
    <ListItem label="Test1" />
    <ListItem label="Test2" />
  </Container>
);

export default Home;
