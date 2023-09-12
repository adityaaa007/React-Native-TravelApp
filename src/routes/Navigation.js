import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Destination from '../screens/Destination';

const Stack = createStackNavigator();

export default function Navigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
        <Stack.Screen name='Destination' component={Destination}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

