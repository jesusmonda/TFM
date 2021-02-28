import React from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, View, FlatList, Text, Alert } from 'react-native';
import { Chip, FAB } from 'react-native-paper';
import Card from '../components/card';
import * as RequestService from '../services/request';
import * as environment from '../environment';
import * as Device from 'expo-device';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    
    this.state = {checked: [1,2,3], images: []}
    this.getImages()

    this.getImages = this.getImages.bind(this)
  }
  
  componentDidMount() {
    this.state = {checked: [1,2,3], images: []}
    this.getImages()

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
    
    this.getImages()
  }

  selectedImage(checked) {
    if (checked.length == 0) {
      this.setState({images: []})
    } else {
      let allImages = []
      checked.map(x => {
        if (x == 1) {
          let images = this.state.allImages.filter(x => x.includes("_cara"))
          if (images.length > 0) {
            allImages = allImages.concat(images)
          }
        }
  
        if (x == 2) {
          let images = this.state.allImages.filter(x => x.includes("_matricula"))
          if (images.length > 0) {
            allImages = allImages.concat(images)
          }
        }
  
        if (x == 3) {
          allImages = this.state.allImages
        }
  
      })

      this.setState({images: allImages})
      console.log(allImages)
    }
  }

  async getImages() {
    try {
      const images = await RequestService.request('GET', `${environment.endpoint}/detect/${Device.osBuildFingerprint.split('/')[3]}`, {}, {}, true)
      this.setState({allImages: images.data.images});
      this.selectedImage(this.state.checked)
    } catch (error) {
      console.log(error)
      Alert.alert(
        "Error de conexión",
        "Reinicia la aplicación"
      );
    }
  }

  render() {
    return (
      <>
        <Layout style={styles.list}>
          <View style={[styles.listContent, styles.direction]}>
            <Chip style={styles.chip} selected={this.state.checked.includes(1) == true ? 'true' : ''} onPress={() => this.clickChip(1)}>Cara</Chip>
            <Chip style={styles.chip} selected={this.state.checked.includes(2) == true ? 'true' : ''} onPress={() => this.clickChip(2)}>Matricula</Chip>
            <Chip style={styles.chip} selected={this.state.checked.includes(3) == true ? 'true' : ''} onPress={() => this.clickChip(3)}>Todos</Chip>
          </View>

          {this.state.images.length > 0 &&
            <>
              <FlatList
              style={styles.listContent}
              data={this.state.images}
              renderItem={({ item }) => (
                  <>
                    <Card callback={this.getImages} image={item}></Card>
                  </>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index}
              />
            </>
          }

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
  