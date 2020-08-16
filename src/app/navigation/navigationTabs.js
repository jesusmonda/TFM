import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedPage from "../screens/feed.page";
import NavigationProfile from "./navigationProfile";
import { useTheme } from "@ui-kitten/components";

export default class NavigationTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const theme = useTheme();
            let iconName;
            color = focused ? theme["color-primary-default"] : "#000";

            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "message" : "message-outline";
            }

            return (
              <MaterialCommunityIcons name={iconName} size={28} color={color} />
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedPage}
          options={{ title: "Feed" }}
        />
        <Tab.Screen
          name="Profile"
          component={NavigationProfile}
          options={{ title: "Profile", tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    );
  }
}
