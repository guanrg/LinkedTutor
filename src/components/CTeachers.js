import React, { Component } from 'react';
import { Text, Tabs,Tab,ScrollableTab } from 'native-base';
import CTeacherListJson from './CTeachListJson.js';

class C_Teachers extends Component{
  render(){
    return(
          <Tabs renderTabBar={()=> <ScrollableTab />} style={{backgroundColor:'#0FF'}}>
            <Tab heading="Home">
              <CTeacherListJson apiid= 'list1.json' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="NetTutor">
              <CTeacherListJson apiid= 'list2.json' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="All Teachers">
              <CTeacherListJson  apiid= 'list3.json' navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Piano">
              <Text>Piano</Text>
            </Tab>
            <Tab heading="Primary school">
              <Text>Primary school</Text>
            </Tab>
            <Tab heading="Middle school">
              <Text>Middle school</Text>
            </Tab>
          </Tabs>
       
    );
  }
}
export default C_Teachers;