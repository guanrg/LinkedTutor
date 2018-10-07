import React, { Component } from 'react';
import { Picker, Header, Left, Body, Right, Button, Icon, Input,Item} from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
class CHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: "1"
    };
  }
  
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render(){
    return(
         <Header style={{ backgroundColor: '#AAF', height: 40 }}>
          <Left>
          <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: 200,color:'#FFF' }}
                placeholder="#F00"
                placeholderStyle={{ color: "#FFF" }}
                placeholderIconColor="#F00"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="悉尼" value="1" />
                <Picker.Item label="墨尔本" value="2" />
                <Picker.Item label="珀斯" value="3" />
                <Picker.Item label="凯恩斯" value="4" />
                <Picker.Item label="阿德莱德" value="5" />
                <Picker.Item label="布里斯本" value="6" />
              </Picker>
            </Item>
          </Left>
          <Body style={{flex:1}}>
            <Grid style={{ backgroundColor: '#FFF' }}>
              <Col style={{width:170 }}>
                <Input placeholder='Search ... ...' style={{color: "#333"}}/>
              </Col>
              <Col style={{width:60 }}>
                <Button transparent>
                  <Icon name='search' />
                </Button>
              </Col>
            </Grid>
          </Body>
          
          <Right>
            <Button transparent style={{width:60 }}>
              <Icon name='settings' />
            </Button>
          </Right>
        </Header>
    );
  }
}
export default CHeader;