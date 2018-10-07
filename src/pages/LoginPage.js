import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <Text>Welcome to LinkedTutor World!</Text>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.push('Home')}
                />
  
                <Button
                    title="Register"
                    onPress={() => this.props.navigation.push('Home')}
                />

            </View>
        );
    }
  }