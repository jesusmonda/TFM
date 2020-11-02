import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import ImageView from 'react-native-image-view';
import { AntDesign } from '@expo/vector-icons'; 
import { Card as CardMaterial } from 'react-native-paper';
import { Button } from '@ui-kitten/components';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {visible: false}
  }

  removePicture() {
    console.log("Remove picture")
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <CardMaterial.Cover style={styles.borderImage} source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg' }} />
        <ImageView
          images={[
            {
              source: {
                  uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
              },
              width: 806,
              height: 720,
            },
          ]}
          isVisible={this.state.visible}
          animationType="fade"
          backgroundColor="#FFF"
          onClose={() => this.setState({visible: false})}
          renderFooter={(currentImage) => (
            <View style={{alignItems: 'center', marginBottom: 20, marginRight: 20}}>
              <Button onPress={() => this.removePicture()} size='small' status='danger' accessoryLeft={() => <AntDesign name="delete" size={20} color="white" />}></Button>
            </View>
          )}
        />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderImage: {
    borderRadius: 5,
    width: 120,
    height: 120,
    marginTop: 10
  },
});