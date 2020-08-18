import React from "react";
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Layout,
  Avatar,
  Button,
  CheckBox,
  useTheme,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export default class FeedCreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      checked: 0,
    };
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
                  name="close-outline"
                  onPress={() => this.navigation.goBack()}
                />
              )}
            />
          )}
          accessoryRight={() => (
            <TopNavigationAction
              icon={(props) => (
                <Button
                  style={styles.button}
                  status="primary"
                  size="small"
                  onPress={() => this.navigation.goBack()}
                >
                  Send
                </Button>
              )}
            />
          )}
        />

        {/* CONTENT */}
        <Layout style={styles.list}>
          <View style={[styles.listContent, styles.direction]}>
            <Avatar
              style={styles.left}
              size="medium"
              source={require("../../../../assets/images/avatar.jpg")}
            />
            <TextInput
              mode="outlined"
              style={styles.right}
              multiline
              numberOfLines={20}
            />
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>
            <View style={styles.footerDirection}>
              {/* BUTTON IMAGE */}
              <Button
                appearance="ghost"
                status="basic"
                size="large"
                accessoryLeft={(props) => {
                  const theme = useTheme();
                  return (
                    <Feather
                      name="image"
                      size={23}
                      color={theme["text-hint-color"]}
                    />
                  );
                }}
              />

              {/* BUTTON COMMENT */}
              <CheckBox
                checked={this.state.checked}
                onChange={(nextChecked) =>
                  this.setState({ checked: nextChecked })
                }
              >
                Is it a doubt?
              </CheckBox>
            </View>
          </View>
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
  direction: {
    flexDirection: "row",
  },
  left: {
    marginRight: 10,
    marginTop: 4,
  },
  right: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  footerDirection: {
    flexDirection: "row",
  },
});
