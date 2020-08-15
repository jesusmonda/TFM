import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestPage from '../pages/test.page';
import navigationTest from './navigationTabs.component';
import { NavigationContainer } from '@react-navigation/native';

export default class Navigation extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none' navigationTest='Feed'>
          <Stack.Screen name='Feed' component={navigationTest} />
          <Stack.Screen name='Test' component={TestPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}