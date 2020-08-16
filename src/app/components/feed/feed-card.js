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

    const ItemHours = (props) => {
      const theme = useTheme();
      return (
        <Text style={{ color: theme["text-hint-color"] }} category="label">
          10h ago
        </Text>
      );
    };

    const ItemAvatar = (props) => (
      <Avatar
        shape="round"
        size="small"
        source={require("../../../../assets/images/avatar.jpg")}
      />
    );

    const FooterButton = (props) => {
      const theme = useTheme();

      return (
        <View style={styles.footerHorizontal}>
          <View style={styles.footerLeft}>
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
            <Button
              appearance="ghost"
              status="basic"
              size="large"
              style={{ paddingLeft: 0 }}
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
            description={ItemFLat}
            accessoryLeft={ItemAvatar}
            accessoryRight={ItemHours}
          />
        )}
        footer={FooterButton}
      >
        <Text style={{ marginHorizontal: -15 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  horizontalFlag: {
    flexDirection: "row",
    marginHorizontal: 7,
  },
  sizeFlag: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
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
