import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import Home from './screens/Home';
import Color from './style/Color';

const Root = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Color.BACKGROUND};
`;

const App = () => (
  <SafeAreaProvider>
    <Root>
      <Home />
    </Root>
  </SafeAreaProvider>
);

export default App;
