import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FeedPage from "../screens/feed.page";
import ChatPage from "../screens/chat.page";
import NavigationProfile from "./navigationProfile";
import { useTheme } from "@ui-kitten/components";

export default function NavigationTabs(props) {
  const theme = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = focused ? theme["color-primary-default"] : theme["background-alternative-color-1"];

          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
            return (
              <MaterialCommunityIcons name={iconName} size={28} color={color} />
            );
          } else if (route.name === "Chat") {
            iconName = focused ? "message" : "message-outline";
            return (
              <MaterialCommunityIcons name={iconName} size={28} color={color} />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            return <MaterialIcons name={iconName} size={28} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: theme["background-basic-color-1"],
        inactiveBackgroundColor: theme["background-basic-color-1"],
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedPage}
        options={{ title: "Feed" }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatPage}
        options={{ title: "Chat" }}
      />
      <Tab.Screen
        name="Profile"
        component={NavigationProfile}
        options={{ title: "Profile", tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
}
