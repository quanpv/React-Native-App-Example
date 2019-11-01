import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import { Image } from 'react-native';
import HomeScreen from '../screens/tab/HomeScreen';
import NewsScreen from '../screens/tab/NewsScreen';
import Stack from './Stack';

Stack.navigationOptions = {
  tabBarLabel: 'Home1234',
  tabBarIcon: () => (
    <Image source={require('../assets/images/homepage.png')} />
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
      activeTintColor: '#e91e63',
      inactiveTintColor: '#888',
      activeBackgroundColor: '#FFF', // iOS
      inactiveBackgroundColor: '#DDD', // iOS
      pressColor: '#e91e63', // Android
      indicatorStyle: { // Android
        backgroundColor: '#242134',
      },
      style: {
        backgroundColor: '#EEE', // Android
      },
    },
  },
);

const AppContainer = createAppContainer(Tab);

export default AppContainer;
