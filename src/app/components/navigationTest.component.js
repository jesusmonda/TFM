import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestPage from '../pages/test.page';
import CommentPage from '../pages/comment.page';

export default class NavigationTest extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator navigationTest='Comment'>
        <Stack.Screen name='Comment' component={CommentPage} options={{ headerShown: false }}  />
        <Stack.Screen name='Test' component={TestPage} options={{ headerShown: true, animationEnabled: false }} />
      </Stack.Navigator>
    );
  }
}
