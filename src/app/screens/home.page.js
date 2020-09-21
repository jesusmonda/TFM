import React from "react";
import {
  TopNavigation,
  Icon,
  TopNavigationAction,
  Button,
  useTheme,
  Layout,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Avatar, Button as ButtonMaterial, Card, Title, Paragraph, Chip} from 'react-native-paper';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  accessoryRight() {
    return (
      (
        <TopNavigationAction
          icon={(props) => <Icon {...props} name="person" />}
        />
      )
    )
  }
  title() {
    const theme = useTheme();
    return (
      <Button style={styles.button} size='large' appearance='ghost' status='basic' accessoryRight={(props) => (
          <AntDesign name="caretdown" size={18} color={theme["text-hint-color"]} />
        )}>
        Seleccione ubicación
      </Button>
    )
  }
  render() {
    return (
      <>
        <TopNavigation
          alignment='start'
          title={() => this.title()}
          accessoryRight={() => this.accessoryRight()}
        />

        <Layout style={styles.list}>
          <View style={[styles.listContent, styles.direction]}>
            <Chip style={styles.chip} onPress={() => console.log('Pressed')}>Pubs</Chip>
            <Chip style={styles.chip} selected="true">Disco</Chip>
            <Chip style={styles.chip}>Bar</Chip>
            <Chip style={styles.chip}>Terrazas</Chip>
          </View>

          <View style={[styles.listContent]}>
            <Card>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
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
    paddingHorizontal: 26,
  },
  direction: {
    flexDirection: "row",
  },
  button: {
    color: '#000000'
  },
  chip: {
    marginHorizontal: 2,
  }
});
