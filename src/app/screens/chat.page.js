import React from "react";
import {
  List,
  ListItem,
  Layout,
  TopNavigation,
  Avatar,
  Text,
  useTheme,
  Divider,
  Button,
} from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ChatItem from "../components/chat/chat-item";

export default class ChatPage extends React.Component {
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
        <TopNavigation title="Chat" alignment="center" />
        <List
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={[1, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1]}
          ItemSeparatorComponent={Divider}
          renderItem={() => <ChatItem />}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
