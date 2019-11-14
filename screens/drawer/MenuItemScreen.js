import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MenuItemComponent from '../../components/drawer/MenuItemComponent';
import WebViewComponent from '../../components/WebViewComponent';
import { WebView } from 'react-native-webview';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List
} from "native-base";


class MenuItemScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    console.log('MenuItemScreen------>', navigation.getParam('link', ''))
    return (
      <Container>
        <Header style={{backgroundColor: '#e0ffff'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex: 3}}>
            <Title style={{color: "#006c00"}}>Bảo Hiểm Nhà Tư Nhân</Title>
          </Body>
          <Right />
        </Header>

        <Content contentContainerStyle={{ flexGrow: 1 }}>
        {/* <View style={styles.container}> */}
        {/* <MenuItemComponent text={'Menu Nhập Đơn!'} /> */}
        <WebViewComponent style={{ flex: 1 }} link= {navigation.getParam('link', '')}/>
        </Content>
      </Container>
     
    );
  }
}

MenuItemScreen.navigationOptions = {
  // title: 'Screen 2',
  // headerRight: <BackToMenu />,
  // headerTintColor: '#3498db',
  // gesturesEnabled: true,

  // // only to Tab navigation example
  // tabBarLabel: 'Home2',
  // tabBarIcon: () => (
  //   <Image source={require('../../assets/images/homepage.png')} />
  // ),

  // only to Drawer navigation example
  drawerLabel: 'Nhập đơn',
  drawerIcon: () => (
    <Image source={require('../../assets/images/homepage.png')} />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default MenuItemScreen;
