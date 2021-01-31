import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; 
import * as RequestService from '../services/request';
import * as environment from '../environment';
import * as Device from 'expo-device';

export default class CameraPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      hasPermission: null,
      type: Camera.Constants.Type.back,
      autoFocus: 'on',
      loading: false,
    }

    this.takePicture = this.takePicture.bind(this)
    this.changeCamera = this.changeCamera.bind(this)
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({hasPermission: status === 'granted'});
  }

  async takePicture() {
    try {
      this.setState({loading: true})
      this.camera.takePictureAsync({skipProcessing: true, quality: 1, base64: true}).then(async (image) => {
        this.camera.pausePreview()

        await RequestService.request('POST', `${environment.endpoint}/detect`, {userId: Device.osBuildFingerprint.split('/')[3], image:image.base64}, {}, true)
        this.setState({loading: false})
        this.navigation.navigate('Home');
      })
    } catch (error) {
      console.log(error)
      Alert.alert(
        "Error de conexión",
        "Reinicia la aplicación"
      );
    }
  }

  changeCamera() {
    this.setState({type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back});
  }

  render() {
    if (this.state.hasPermission === null) {
      return <View />;
    }
    if (this.state.hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Camera style={{ flex: 1, justifyContent: "center" }} type={this.state.type} autoFocus={this.state.autoFocus} ref={ref => { this.camera = ref}}>
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
                {!this.state.loading &&
                  <Ionicons name="ios-radio-button-on" size={90} color="white" style={{marginRight: 20}} />
                }
              </TouchableOpacity>
            </View>

          {this.state.loading &&
          <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            alignSelf: 'center',
          }}>
            <ActivityIndicator size="large"/>
          </View>
          }

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