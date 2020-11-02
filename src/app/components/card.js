import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import ImageView from 'react-native-image-view';
import { AntDesign } from '@expo/vector-icons'; 
import { Card as CardMaterial } from 'react-native-paper';
import { Button } from '@ui-kitten/components';
import * as RequestService from '../services/request';
import * as environment from '../environment';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {visible: false}
  }

  async removePicture() {
    const imageId = this.props.image.replace('https://storage.googleapis.com/detected-customer-images/test/', '')
    try {
      this.props.callback();
      await RequestService.request('POST', `${environment.endpoint}/detect/delete`, {imageId, userId: 'test'}, {}, true)
      this.setState({visible: false})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <TouchableOpacity onPress={() => this.setState({visible: true})}>
        <CardMaterial.Cover style={styles.borderImage} source={{ uri: this.props.image }} />
        {
          this.props.image == "https://site.groupe-psa.com/content/uploads/sites/45/2016/12/white-background-2.jpg" ?
          <></>
          :
          <ImageView
          images={[
            {
              source: {
                  uri: this.props.image,
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
        }
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