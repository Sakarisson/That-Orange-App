import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import ThemedStatusBar from './components/ThemedStatusBar';
import Home from './screens/Home';
import DynamicThemeProvider from './style/theme/DynamicThemeProvider';

const Root = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const App = () => (
  <SafeAreaProvider>
    <DynamicThemeProvider>
      <Root>
        <ThemedStatusBar />
        <Home />
      </Root>
    </DynamicThemeProvider>
  </SafeAreaProvider>
);

export default App;
