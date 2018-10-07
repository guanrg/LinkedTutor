import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class CImage extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  render(){
    return (
      <View>
        <Image source={{uri: this.props.imageurl}}/>
      </View>
     );
  }
}
