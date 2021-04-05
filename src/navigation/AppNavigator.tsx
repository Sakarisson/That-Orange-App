import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Story from '../screens/Story';

export type AppStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.STORY]: { id: string };
};

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme.navigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.STORY} component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
