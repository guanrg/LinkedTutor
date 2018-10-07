import React, { Component } from 'react';
import {Icon,Button,  Footer,  FooterTab,  Text } from "native-base";
import {StyleSheet} from 'react-native';

class CFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Footer style={styles.footer}>
          <FooterTab>
            <Button vertical active>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>My</Text>
            </Button>
            <Button vertical >
              <Icon active name="navigate" />
              <Text>Teachers</Text>
            </Button>
            <Button vertical>
              <Icon name="paper" />
              <Text>Note</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default CFooter;
const styles = StyleSheet.create({
  footer:{
    height:50,
    backgroundColor:"#EEE"
  }
});