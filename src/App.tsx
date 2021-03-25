import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import ThemedStatusBar from './components/ThemedStatusBar';
import AppNavigator from './navigation/AppNavigator';
import DynamicThemeProvider from './style/theme/DynamicThemeProvider';

const queryClient = new QueryClient();

const Root = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const App = () => (
  <SafeAreaProvider>
    <DynamicThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Root>
          <ThemedStatusBar />
          <AppNavigator />
        </Root>
      </QueryClientProvider>
    </DynamicThemeProvider>
  </SafeAreaProvider>
);

export default App;
