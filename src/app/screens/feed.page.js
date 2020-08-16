import React from "react";
import {
  Button,
  Layout,
  Tab,
  TabView,
  Text,
  TopNavigation,
  Icon,
  TopNavigationAction,
} from "@ui-kitten/components";
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
            <FeedCard />
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
