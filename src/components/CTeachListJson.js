import React, { Component } from 'react';
import {FlatList, ActivityIndicator  } from 'react-native';
import {View, Text} from 'native-base';
import CPerson from './CPerson.js';

class C_TeacherListJson extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    let url = 'http://9ystar.com/api/data/' + this.props.apiid;
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.persons,
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
          <ActivityIndicator animating size="large"/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem ={ ({item}) => 
            <View style={{flex: 1, padding:1}}>
              <CPerson imageurl={item.image} dataSource={item} navigation={this.props.navigation}/>
            </View>
          }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
export default C_TeacherListJson;