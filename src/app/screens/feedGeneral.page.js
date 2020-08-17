import React from "react";
import FeedCard from "../components/feed/feed-card";
import { Layout, List } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default class FeedGeneralPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={[1, 2, 3, 4, 5, 6, 6]}
        renderItem={() => <FeedCard />}
      />
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