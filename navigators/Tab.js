import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Image, Text } from 'react-native';
import HomeScreen from '../screens/tab/HomeScreen';
import NewsScreen from '../screens/tab/NewsScreen';
import Stack from './Stack';
import WebViewScreen from '../screens/WebViewScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../screens/login/LoginScreen';
import MenuItemScreen from '../screens/drawer/MenuItemScreen';
import {Container, Content, Header, Body } from 'native-base';
import ListContentDrawer from '../components/drawer/ListContentDrawer'

Stack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    // <Image source={require('../assets/images/homepage.png')} />
    <Icon name="home" size={30} color="gray" />
  ),
  gesturesEnabled: false,
};

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Stack,
    },
    Tab2: {
      screen: NewsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#FFF', // iOS
      inactiveBackgroundColor: '#DDD', // iOS
      pressColor: '#e91e63', // Android
      indicatorStyle: { // Android
        backgroundColor: '#242134',
      },
      style: {
        backgroundColor: '#1F2124', // Android
      },
    },
  },
);

const CustomDrawerContentComponent = (props) => (
  <Container>
  <Header style={{
  	height: 110, 
  	backgroundColor: '#e3fedf'
  }}>
  <Body>
  <Image
  // style={ {
  //   height: 150,
  //   width: 150
  // }}
  source={require('../assets/images/logo_mic.png')}/>
  </Body>
  </Header>
  <Content>
  <ListContentDrawer/>
  {/* <DrawerItems {...props}/> */}
  </Content>
  </Container>
)

const StackWebView = createStackNavigator(
  {
    Tab: {
      screen: Tab
    },
    WebView: {
      screen: WebViewScreen
    },
  },
  {
    initialRouteName: 'Tab',
    mode: 'modal', // 'card' or 'modal'
    headerMode: 'none'
  },
);

const AppMain = createDrawerNavigator(
 { 
   NhaTN: MenuItemScreen,
   ItemScreen: MenuItemScreen,
   MainTabs: StackWebView
 },
  {
    contentComponent: CustomDrawerContentComponent
  }
);

const App = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Main: {
    screen: AppMain
  }
  
});

const AppContainer = createAppContainer(App);

export default AppContainer;
