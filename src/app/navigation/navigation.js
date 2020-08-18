import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ChatPage from "../screens/chat/chat.page";
import FeedCreatePage from "../screens/feed/feedCreate.page";
import FeedCommentPage from "../screens/feed/feedComment.page";
import NavigationTabs from "./navigationTabs";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" navigationTest="Feed">
          <Stack.Screen name="Feed" component={NavigationTabs} />
          <Stack.Screen name="FeedCreate" component={FeedCreatePage} />
          <Stack.Screen name="FeedComment" component={FeedCommentPage} />
          <Stack.Screen name="Chat" component={ChatPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
