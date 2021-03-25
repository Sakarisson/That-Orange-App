import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import ListItem from './components/ListItem';
import Color from './style/Color';

const Root = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Color.BACKGROUND};
`;

const App = () => (
  <SafeAreaProvider>
    <Root>
      <ListItem label="Test" />
      <ListItem label="Test2" />
    </Root>
  </SafeAreaProvider>
);

export default App;
