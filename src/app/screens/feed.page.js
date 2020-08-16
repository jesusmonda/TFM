import React from "react";
import NavigationFeed from "../navigation/navigationFeed";
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
} from "@ui-kitten/components";

export default class FeedPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <TopNavigation
          accessoryRight={() => (
            <TopNavigationAction
              icon={(props) => <Icon {...props} name="bell-outline" />}
            />
          )}
        />
        <NavigationFeed />
      </>
    );
  }
}
