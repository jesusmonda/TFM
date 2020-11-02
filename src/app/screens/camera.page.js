import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; 
import * as RequestService from '../services/request';
import * as environment from '../environment';

export default class CameraPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      hasPermission: null,
      type: Camera.Constants.Type.back,
      autoFocus: 'on',
    }

    this.takePicture = this.takePicture.bind(this)
    this.changeCamera = this.changeCamera.bind(this)
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({...this.state, hasPermission: status === 'granted'});
  }

  async takePicture() {
    try {
      const image = await this.camera.takePictureAsync({base64: true})
      this.camera.pausePreview()
      await RequestService.request('POST', `${environment.endpoint}/detect`, {userId: 'test', image:image.base64}, {}, true)
      this.navigation.navigate('Home');
    } catch (error) {
      console.log(error)
    }
  }

  changeCamera() {
    this.setState({...this.state, type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back});
  }

  render() {
    if (this.state.hasPermission === null) {
      return <View />;
    }
    if (this.state.hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.type} autoFocus={this.state.autoFocus} ref={ref => { this.camera = ref}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.takePicture()}>
                <Ionicons name="ios-radio-button-on" size={90} color="white" style={{marginRight: 20}} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => this.changeCamera()}>
                <Ionicons name="ios-reverse-camera" size={30} color="white" style={{marginRight: 20, marginBottom: 29}} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}