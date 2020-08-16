import React from "react";
import {
  Button,
  Layout,
  Tab,
  TabView,
  TopNavigation,
  Icon,
  TopNavigationAction,
  List,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import FeedCard from "../components/feed/feed-card";

export default class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      selectedIndex: 0,
    };
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

        <TabView
          selectedIndex={this.state.selectedIndex}
          onSelect={(index) => this.setState({ selectedIndex: index })}
        >
          <Tab title="GENERAL">
            <Layout>
              <List
                data={[1, 2, 3, 4, 5, 6, 6]}
                renderItem={() => <FeedCard />}
              />
            </Layout>
          </Tab>
          <Tab title="DOUBTS">
            <Layout>
              <Button onPress={() => this.navigation.navigate("Chat")}>
                OPEN Chat
              </Button>
            </Layout>
          </Tab>
        </TabView>
      </>
    );
  }
}
