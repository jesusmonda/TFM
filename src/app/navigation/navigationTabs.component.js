

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedPage from '../pages/feed.page';
import NavigationProfile from '../navigation/navigationProfile.component'

export default class NavigationTabs extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        initialRouteName='Feed'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            color = focused ? '#e5be01' : '#000';

            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'message' : 'message-outline';
            }

            return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#e5be01',
          inactiveTintColor: '#000',
        }}
        >
          <Tab.Screen name='Feed' component={FeedPage} options={{ title: 'Feed', }}/>
          <Tab.Screen name='Profile' component={NavigationProfile} options={{ title: 'Profile', tabBarBadge: 3 }}/>
        </Tab.Navigator>
    );
  }
}
