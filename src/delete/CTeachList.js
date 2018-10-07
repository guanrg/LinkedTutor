import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, List,ListItem,View} from 'native-base';

class C_TeacherList extends Component{

    render(){
      var items = [
        'SI teach in an interactive way mostly. ',
        'Nathaniel Clyne',
        'Dejan Lovren',
        'Mama Sakho',
        'Emre Can1',
        'Emre Can2',
        'Emre Can3',
        'Emre Can4',
        'Emre Can5',
        'Emre Can6',
        'Emre Can7',
        'Emre Can8'
      ];
      var imageUrl = 'http://www.9ystar.com/img/2.jpg';
    return(
        <View style={{height:500}}>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Image 
                  source={{uri: imageUrl}}
                  style={{height: 60, width: 80}}/>
                <View style={{flexWrap: 'wrap',width:200 }}>
                  <Text>{item}</Text>
                </View>
              </ListItem>
            }>
          </List>
        </View>
    );
  }
}
export default C_TeacherList;