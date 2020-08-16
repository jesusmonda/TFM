import React from "react";
import {
  Card,
  List,
  Text,
  ListItem,
  Avatar,
  Button,
  Icon,
} from "@ui-kitten/components";
import { StyleSheet, View, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ItemFLat = (props) => (
      <View style={styles.horizontalFlag}>
        <Image
          style={styles.sizeFlag}
          source={require("../../../../assets/images/spain.png")}
        />
        <Image
          style={styles.sizeFlag}
          source={require("../../../../assets/images/spain.png")}
        />
      </View>
    );

    const ItemButton = (props) => <Button size="tiny">Follow</Button>;

    const ItemAvatar = (props) => (
      <Avatar
        shape="round"
        size="small"
        source={require("../../../../assets/images/avatar.jpg")}
      />
    );

    const FooterButton = (props) => (
      <View style={styles.footerHorizontal}>
        <View style={styles.footerLeft}>
          <Button
            appearance="ghost"
            status="basic"
            size="large"
            accessoryLeft={(props) => <AntDesign {...props} name="heart" size={22} color="red" />}
          />
          <Button
            appearance="ghost"
            status="basic"
            size="large"
            accessoryLeft={(props) => <Icon {...props} name="message-circle-outline" />}
          />
        </View>
        <Button
            appearance="ghost"
            status="basic"
            size="large"
            accessoryLeft={(props) => <Icon {...props} name="more-vertical-outline" />}
          />
      </View>
    );

    return (
      <List
        style={styles.contentContainer}
        data={[1, 2, 3, 4, 5, 6, 6]}
        renderItem={(info) => (
          <Card
            style={styles.card}
            status="control"
            appearance="outline"
            header={(props) => (
              <ListItem
                title="Jesús Monda"
                description={ItemFLat}
                accessoryLeft={ItemAvatar}
                accessoryRight={ItemButton}
              />
            )}
            footer={FooterButton}
          >
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </Card>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  horizontalFlag: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
  sizeFlag: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  card: {
    marginVertical: 4,
  },
  footerHorizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLeft: {
    flexDirection: "row",
  },
});
