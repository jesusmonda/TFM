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

export default class ChatItem extends React.Component {
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
          <Button
            style={{ paddingHorizontal: 0 }}
            appearance="ghost"
            status="basic"
            size="small"
            accessoryLeft={(props) => (
              <FontAwesome name="circle" size={15} color="green" />
            )}
          >
            {" "}
            <Text style={{ color: theme["text-hint-color"] }} category="label">
              10h ago
            </Text>
          </Button>
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
