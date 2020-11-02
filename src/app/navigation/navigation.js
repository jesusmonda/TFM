import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/home.page";
import CameraPage from "../screens/camera.page";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" navigationTest="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Camera" component={CameraPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
