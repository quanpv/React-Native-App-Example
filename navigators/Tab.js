import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/tab/HomeScreen';
import NewsScreen from '../screens/tab/NewsScreen';
import Stack from './Stack';
import WebViewScreen from '../screens/WebViewScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const AppContainer = createAppContainer(StackWebView);

export default AppContainer;
