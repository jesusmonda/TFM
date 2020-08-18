import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@ui-kitten/components";
import FeedDoubtsPage from "../screens/feed/feedDoubts.page";
import FeedGeneralPage from "../screens/feed/feedGeneral.page";

export default function NavigationFeed(props) {
  const theme = useTheme();
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      headerMode="none"
      initialRouteName="General"
      tabBarOptions={{
        activeTintColor: theme["background-alternative-color-1"],
        style: { backgroundColor: theme["background-basic-color-1"] },
      }}
    >
      <Tab.Screen name="General" component={FeedGeneralPage} />
      <Tab.Screen name="Doubts" component={FeedDoubtsPage} />
    </Tab.Navigator>
  );
}
