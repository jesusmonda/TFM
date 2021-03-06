import React from "react";
import {
  Button,
  Layout,
  Text,
  TopNavigation,
  Divider,
  Icon,
  TopNavigationAction,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

export default class ProflePage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <TopNavigation
          alignment="center"
          title="Eva Application"
          accessoryLeft={() => (
            <TopNavigationAction
              onPress={() => this.navigation.goBack()}
              icon={(props) => (
                <Icon {...props} size="32" color="red" name="heart-outline" />
              )}
            />
          )}
          accessoryRight={() => (
            <TopNavigationAction
              onPress={() => this.navigation.goBack()}
              icon={(props) => (
                <Icon {...props} size="32" color="red" name="heart-outline" />
              )}
            />
          )}
        />
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button onPress={() => this.navigation.navigate("Settings")}>
            OPEN Settings
          </Button>
        </Layout>
      </>
    );
  }
}
