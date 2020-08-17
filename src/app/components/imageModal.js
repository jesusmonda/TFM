import React from "react";
import { Image, Modal, TouchableOpacity } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

export default class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <>
        {/* IMAGEN */}
        <TouchableOpacity
          onPress={() =>
            this.setState({
              modalVisible: true,
            })
          }
        >
          <Image style={this.props.style} source={{ uri: this.props.src }} />
        </TouchableOpacity>

        {/* MODAL */}
        <Modal visible={this.state.modalVisible} transparent={true}>
          <ImageViewer
            onCancel={() =>
              this.setState({
                modalVisible: false,
              })
            }
            enableSwipeDown="true"
            maxOverflow="1"
            imageUrls={[
              {
                url: this.props.src,
              },
            ]}
          />
        </Modal>
      </>
    );
  }
}
