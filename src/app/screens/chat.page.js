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

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      counter: 0,
    };
  }

  render() {
    const ItemAvatar = (props) => (
      <Avatar
        shape="round"
        size="medium"
        source={require("../../../assets/images/avatar.jpg")}
      />
    );

    const ItemHours = (props) => {
      const theme = useTheme();
      return (
        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ paddingVertical: 0 }}
            appearance="ghost"
            status="basic"
            size="small"
            accessoryLeft={(props) => (
              <FontAwesome name="circle" size={15} color="green" />
            )}
          />
          <Text
            style={{ marginTop: 7, color: theme["text-hint-color"] }}
            category="label"
          >
            10h ago
          </Text>
        </View>
      );
    };

    const renderItem = (props) => (
      <ListItem
        title="Jesus Monda"
        description="Hola que tal"
        accessoryLeft={ItemAvatar}
        accessoryRight={ItemHours}
      />
    );

    return (
      <>
        <TopNavigation title="Chat" alignment="center" />
        <List
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={[1, 3, 4, 5, 6, 1,1,1,1,1,1]}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
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
