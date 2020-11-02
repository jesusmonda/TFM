import React from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, View, FlatList } from 'react-native';
import { Chip, FAB } from 'react-native-paper';
import Card from '../components/card';
import * as RequestService from '../services/request';
import * as environment from '../environment';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {checked: [1,2]}

    this.getImages = this.getImages.bind(this)
    this.getImages()
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', e => {
      this.getImages();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
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

  async getImages() {
    try {
      const images = await RequestService.request('GET', `${environment.endpoint}/detect/test`, {}, {}, true)
      const decimal = (images.data.num_images / 3) - Math.trunc(images.data.num_images / 3)
      if (decimal > 0.5) {
        images.data.images.push("https://site.groupe-psa.com/content/uploads/sites/45/2016/12/white-background-2.jpg")
      } else if (decimal > 0.2) {
        images.data.images.push("https://site.groupe-psa.com/content/uploads/sites/45/2016/12/white-background-2.jpg")
        images.data.images.push("https://site.groupe-psa.com/content/uploads/sites/45/2016/12/white-background-2.jpg")
      }

      this.setState({...this.state, images: images.data.images});
    } catch (error) {
      console.log(error)
    }
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
            data={this.state.images}
            renderItem={({ item }) => (
              <Card callback={this.getImages} image={item}></Card>
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
  