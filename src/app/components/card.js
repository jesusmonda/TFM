import React from "react";
import { ActivityIndicator, StyleSheet, View, TouchableOpacity } from "react-native";
import ImageView from 'react-native-image-view';
import { AntDesign } from '@expo/vector-icons'; 
import { Card as CardMaterial } from 'react-native-paper';
import { Button } from '@ui-kitten/components';
import * as RequestService from '../services/request';
import * as environment from '../environment';
import * as Device from 'expo-device';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {visible: false, loading: false}

    if (Array.isArray(this.props.image)) {
      this.image = this.props.image[0]
    } else {
      this.image = this.props.image
    }
  }

  async removePicture() {
    const imageId = this.image.replace('https://storage.googleapis.com/detected-customer-images/' + Device.osBuildFingerprint.split('/')[3] + '/', '')
    try {
      this.setState({visible: false, loading: true})
      await RequestService.request('POST', `${environment.endpoint}/detect/delete`, {imageId, userId: Device.osBuildFingerprint.split('/')[3]}, {}, true)
      this.props.callback(imageId);
      this.setState({visible: false, loading: false})
    } catch (error) {
      console.log(error)
      this.setState({visible: false, loading: false})
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <CardMaterial.Cover style={styles.borderImage} source={{ uri: this.image }} />
        <ImageView
        images={[
          {
            source: {
                uri: this.image,
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

      {this.state.loading &&
        <View
        style={{
          flex: 1,
          flexDirection: 'row',
          position: 'absolute',
          bottom: 40,
          alignSelf: 'center',
        }}>
          <ActivityIndicator size="large"/>
        </View>
      }
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