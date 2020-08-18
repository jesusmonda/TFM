import React from "react";
import {
  ListItem,
  Avatar,
  Text,
  useTheme,
  Button,
} from "@ui-kitten/components";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class FeedCommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ItemLeft = (props) => (
      <Avatar
        shape="round"
        size="medium"
        source={{
          uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
        }}
      />
    );

    const ItemRight = (props) => {
      const theme = useTheme();
      return (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: theme["text-hint-color"] }} category="label">
            10h ago
          </Text>
        </View>
      );
    };

    return (
      <ListItem
        title="Jesus Monda"
        description="Hola que tal"
        accessoryLeft={ItemLeft}
        accessoryRight={ItemRight}
      />
    );
  }
}
