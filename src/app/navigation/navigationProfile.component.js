import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsPage from '../pages/settings.page';
import ProfilePage from '../pages/profile.page';

export default class NavigationProfile extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator headerMode='none' navigationTest='Profile'>
        <Stack.Screen name='Profile' component={ProfilePage} />
        <Stack.Screen name='Settings' component={SettingsPage} />
      </Stack.Navigator>
    );
  }
}