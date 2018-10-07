import React, { Component } from 'react';
import {Button, View, Image,StyleSheet,ActivityIndicator,FlatList} from 'react-native';
import { Text } from 'native-base';

export default class PersonDetailsPage extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true};
  }

  
  componentDidMount(){
      let url = 'http://9ystar.com/api/data/1.json';
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState(
            {
              isLoading: false,
              techer: responseJson.techer[0]
            },
            function(){}
          );
        })
        .catch((error) =>{
          console.error(error);
          Alert.alert(
            'has error',
            error,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
            { cancelable: false }
          )
        });
    }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      
      <View style={styles.view1}>
        <Image style={styles.image} source={{uri: this.state.techer.image}} />
        <View style={styles.view2}>
              <Text style={styles.s1}>教师：{this.state.techer.name}</Text>
              <Text style={styles.s2}>特长：{this.state.techer.position}</Text>
              <Text style={styles.s2}>birthYear：{this.state.techer.birthYear}</Text>
              <Text style={styles.s2}>position：{this.state.techer.position}</Text>
              <Text style={styles.s2}>sex：{this.state.techer.sex}</Text>
              <Text style={styles.s2}>rducation：{this.state.techer.rducation}</Text>
              <Text style={styles.s2}>university:{this.state.techer.university}</Text>
              <Text style={styles.s2}>matchCount：{this.state.techer.matchCount}</Text>
              <Text style={styles.s2}>major：{this.state.techer.major}</Text>
              <Text style={styles.s2}>nativePlace：{this.state.techer.nativePlace}</Text>
              
              <FlatList
                data={this.state.techer.teacherTutorInfo}
                renderItem ={ ({item}) => 
                  <View style={{flex: 1, padding:1}}>
                      <Text style={styles.s2}>subjects：{item.subjects}</Text>
                  </View>
                }
                keyExtractor={({id}, index) => id}
            />
        </View>
      </View>
     );
  }
}
const styles = StyleSheet.create({
  view1:{
    flex: 2,
    flexDirection: 'column',
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
    height:50,
    borderWidth:1,
    borderRadius:40,
    paddingHorizontal:2
  },
  s1: {
    backgroundColor:"#EEE",
    
    borderRadius:6
  },
  s2: {
    backgroundColor:"#DDD",
    
    borderRadius:6
  }

});

