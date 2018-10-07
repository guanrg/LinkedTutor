import React, {Component} from 'react';
import {Platform, StyleSheet, View,Button} from 'react-native';
import CFooter from '../components/CFooter.js';
import CHeader from '../components/CHeader.js';
import CTeachers from '../components/CTeachers.js';


export default class HomePage extends Component {
  render() {
    return (
    <View style={styles.container}>
      <CHeader />

    <View style={styles.content}>
      <CTeachers navigation={this.props.navigation}/>
    </View>

    <CFooter />
  </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    ...Platform.select({
      ios: {
        paddingTop: 30
      }
    })
  },
  content: {
    flex: 1
  }
});