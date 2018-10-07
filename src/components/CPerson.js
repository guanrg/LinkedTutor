import React, { Component } from 'react';
import {View,Text,Button, Image,StyleSheet,TouchableHighlight} from 'react-native';
import PersonDetailsPage from '../pages/PersonDetailsPage.js';

export default class CPerson extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      
      <View>
        <TouchableHighlight
          onPress={() => navigate('PersonDetails',
              {
                id : 1
              })}>
          <View style={styles.view1}>
            <Image style={styles.image} source={{uri: this.props.dataSource.image}} />
            <View style={styles.view2}>
                  <Text style={styles.s1}>教师：{this.props.dataSource.Name}</Text>
                  <Text style={styles.s2}>特长：{this.props.dataSource.description}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
     );
  }
}
const styles = StyleSheet.create({
  view1:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'stretch' 
  },
  view2:{
    flex:3, 
    flexDirection: 'column',
    borderRadius:6,
    backgroundColor:"#FFF",
    paddingHorizontal:2
  },
  image:{
    flex:1, 
    height:80,
    borderWidth:1,
    borderRadius:40,
    paddingHorizontal:2
  },
  s1: {
    backgroundColor:"#EEE",
    height:25,
    borderRadius:6
  },
  s2: {
    backgroundColor:"#DDD",
    height:55,
    borderRadius:6
  }

});

