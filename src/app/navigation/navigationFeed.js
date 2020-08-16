import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedDoubtsPage from "../screens/feedDoubts.page";
import FeedGeneralPage from "../screens/feedGeneral.page";

export default class NavigationFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createMaterialTopTabNavigator();

    return (
      <Tab.Navigator headerMode="none" initialRouteName="General">
        <Tab.Screen name="General" component={FeedGeneralPage} />
        <Tab.Screen name="Doubts" component={FeedDoubtsPage} />
      </Tab.Navigator>
    );
  }
}
