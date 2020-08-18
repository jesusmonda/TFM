import React from "react";
import { List, TopNavigation, Divider } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import ChatItem from "../../components/chat/chat-item";

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
    paddingHorizontal: 8,
  },
});
