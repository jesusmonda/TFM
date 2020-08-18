import React from "react";
import { List } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import FeedCard from "../../components/feed/feed-card";

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
        renderItem={() => <FeedCard navigation={this.props.navigation} />}
      />
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
