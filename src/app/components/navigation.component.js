import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedPage from '../pages/feed.page';
import navigationTest from '../components/navigationTest.component';

export default class Navigation extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Feed'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            color = focused ? '#e5be01' : '#000';

            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Comment') {
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
          <Tab.Screen name='Feed' component={FeedPage} options={{ title: 'Feed', tabBarBadge: 3 }}/>
          <Tab.Screen name='Comment' component={navigationTest} options={{ title: 'Comment', tabBarBadge: 3 }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
