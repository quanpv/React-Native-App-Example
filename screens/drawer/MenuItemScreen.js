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

  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this)
  }

setView(link) {
if (link != '') {
return <WebViewComponent style={{ flex: 1 }} link={link}/>

} else {
  return <Text style={{fontSize: 17, color: 'blue'}}>Chào Mừng Bạn Đến với Bảo Hiểm Quân Đội MIC</Text>
}
}

  render() {
    const { navigation } = this.props;
    var link = navigation.getParam('link', '')
    console.log('MenuItemScreen Link------>', navigation.getParam('link', ''))
    console.log('MenuItemScreen Title------>', navigation.getParam('title', ''))
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
            <Title style={{color: "#006c00"}}>Bảo Hiểm {navigation.getParam('title', '')}</Title>
          </Body>
          <Right />
        </Header>

        <Content contentContainerStyle={{ flexGrow: 1, justifyContent:'center'}}>
        {/* <View style={styles.container}> */}
        {/* <MenuItemComponent text={'Menu Nhập Đơn!'} /> */}
        {/* <WebViewComponent style={{ flex: 1 }} link={link}/> */}
        {this.setView(link)}
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
