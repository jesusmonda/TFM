import React from "react";
import NavigationFeed from "../../navigation/navigationFeed";
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
} from "@ui-kitten/components";
import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";

export default class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
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

        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => this.navigation.navigate("FeedCreate")}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
