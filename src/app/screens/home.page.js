import React from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, View, FlatList } from 'react-native';
import { Chip, FAB } from 'react-native-paper';
import Card from '../components/card';
import {request as RequestService} from '../services/request';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {checked: [1,2]}
  }

  clickChip(elements) {
    const checked = [...this.state.checked];
    if (checked.includes(elements)) {
      const value = checked.indexOf(elements);
      checked.splice(value, 1);
    } else {
      checked.push(elements);
    }
    this.setState({checked: checked})
  }

  render() {
    return (
      <>
        <Layout style={styles.list}>
          <View style={[styles.listContent, styles.direction]}>
            <Chip style={styles.chip} selected={this.state.checked.includes(1) == true ? 'true' : ''} onPress={() => this.clickChip(1)}>Cara</Chip>
            <Chip style={styles.chip} selected={this.state.checked.includes(2) == true ? 'true' : ''} onPress={() => this.clickChip(2)}>Matricula</Chip>
          </View>

          <FlatList
          style={styles.listContent}
            data={[1,2,3,4]}
            renderItem={({ item }) => (
              <Card></Card>
            )}
            numColumns={3}
            keyExtractor={(item, index) => index}
          />

          <FAB
            style={styles.fab}
            large
            icon="plus"
            onPress={() => this.navigation.navigate('Camera')}
          />
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
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  direction: {
    flexDirection: "row",
  },
  chip: {
    marginHorizontal: 2,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
  