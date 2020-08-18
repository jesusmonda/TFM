import React from "react";
import {
  Card,
  Text,
  ListItem,
  Avatar,
  Button,
  Icon,
  useTheme,
} from "@ui-kitten/components";
import { StyleSheet, View, Image } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import ImageModal from "../imageModal";

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    console.log(props.navigation);
  }

  render() {
    const ItemDescription = (props) => (
      <View style={styles.flagHorizontal}>
        <Image
          style={styles.flagSize}
          source={require("../../../../assets/images/spain.png")}
        />
        <Image
          style={styles.flagSize}
          source={require("../../../../assets/images/spain.png")}
        />
      </View>
    );

    const ItemRight = (props) => {
      const theme = useTheme();
      return (
        <Text style={{ color: theme["text-hint-color"] }} category="label">
          10h ago
        </Text>
      );
    };

    const ItemLeft = (props) => (
      <Avatar
        shape="round"
        size="small"
        source={require("../../../../assets/images/avatar.jpg")}
      />
    );

    const ItemFooter = (props) => {
      const theme = useTheme();

      return (
        <View style={styles.footerHorizontal}>
          <View style={styles.footerLeft}>
            {/* BUTTON LIKE */}
            <Button
              appearance="ghost"
              status="basic"
              size="large"
              accessoryLeft={(props) => (
                <AntDesign
                  {...props}
                  style={{ paddingRight: 0 }}
                  name="heart"
                  size={22}
                  color="red"
                />
              )}
            >
              0
            </Button>

            {/* BUTTON COMMENT */}
            <Button
              appearance="ghost"
              status="basic"
              size="large"
              style={{ paddingLeft: 0 }}
              onPress={() => this.navigation.navigate("FeedComment")}
              accessoryLeft={(props) => (
                <Feather
                  {...props}
                  style={{ paddingRight: 0 }}
                  name="message-circle"
                  size={24}
                  color={theme["text-hint-color"]}
                />
              )}
            >
              0
            </Button>
          </View>

          {/* BUTTON VERTICAL */}
          <Button
            appearance="ghost"
            status="basic"
            size="large"
            accessoryLeft={(props) => (
              <Icon {...props} name="more-vertical-outline" />
            )}
          />
        </View>
      );
    };

    return (
      <Card
        style={styles.card}
        appearance="filled"
        header={(props) => (
          <ListItem
            title="Jesús Monda"
            description={ItemDescription}
            accessoryLeft={ItemLeft}
            accessoryRight={ItemRight}
          />
        )}
        footer={ItemFooter}
      >
        <Text style={{ marginHorizontal: -15 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <ImageModal
          style={styles.bodyImage}
          src="https://images.unsplash.com/photo-1571501679680-de32f1e7aad4"
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  flagHorizontal: {
    flexDirection: "row",
    marginHorizontal: 7,
  },
  flagSize: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
  card: {
    marginVertical: 4,
  },
  footerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLeft: {
    flexDirection: "row",
  },
  bodyImage: {
    height: 200,
    marginHorizontal: -15,
  },
});
