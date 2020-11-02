import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {request as RequestService} from '../services/request';
import { Ionicons } from '@expo/vector-icons'; 

export default class CameraPage extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      hasPermission: null,
      type: Camera.Constants.Type.back,
      autoFocus: 'on',
    }
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({...this.state, hasPermission: status === 'granted'});
  }

  takePicture() {
    console.log("request to upload image")
    this.navigation.navigate('Home');
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
        <Camera style={{ flex: 1 }} type={this.state.type} autoFocus={this.state.autoFocus}>
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
                <Ionicons name="ios-radio-button-on" size={60} color="white" style={{marginRight: 20}} />
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
                <Ionicons name="ios-reverse-camera" size={30} color="white" style={{marginRight: 20, marginBottom: 10}} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}