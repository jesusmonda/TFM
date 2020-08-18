import React from "react";
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Layout,
  Divider,
  Text,
  List,
} from "@ui-kitten/components";
import { StyleSheet, View, ScrollView } from "react-native";
import FeedCard from "../../components/feed/feed-card";
import FeedCommentItem from "../../components/feed/feed-comment-item";

export default class FeedCommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <>
        {/* HEADER */}
        <TopNavigation
          accessoryLeft={() => (
            <TopNavigationAction
              icon={(props) => (
                <Icon
                  {...props}
                  name="arrow-back-outline"
                  onPress={() => this.navigation.goBack()}
                />
              )}
            />
          )}
        />

        {/* CONTENT */}
        <Layout style={styles.list}>
          <ScrollView>
            <View style={styles.listContent}>
              <FeedCard />
            </View>

            <Text style={styles.commentContent} category="h6">
              Comments
            </Text>

            <View style={styles.listContent}>
              <FeedCommentItem />
              <Divider />
            </View>
          </ScrollView>
        </Layout>
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
  commentContent: {
    paddingHorizontal: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
});
