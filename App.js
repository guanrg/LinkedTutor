import React, {Component} from 'react';
import {StackNavigator } from 'react-navigation'; 
import HomePage from './src/pages/HomePage.js';
import LoginPage from './src/pages/LoginPage.js';
import PersonDetailsPage from './src/pages/PersonDetailsPage.js';



export default class App extends React.Component {
  render() {
    return <NavigatorDefine />;
  }
}

const NavigatorDefine = StackNavigator({
  Login: {screen: LoginPage},
  Home :{screen:HomePage},
  PersonDetails: {screen:PersonDetailsPage}
  
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  navigationOptions: {}
});
