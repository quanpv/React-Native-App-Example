/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Tab from './navigators/Tab';
import firebase from 'react-native-firebase'
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class App extends React.Component {

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("before fcmToken: ", fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log("after fcmToken: ", fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  async requestPermission() {
    firebase.messaging().requestPermission()
      .then(() => {
        this.getToken();
      })
      .catch(error => {
        console.log('permission rejected');
      });
  }

  async checkPermission() {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log("Permission granted");
          this.getToken();
        } else {
          console.log("Request Permission");
          this.requestPermission();
        }
      });
  }

  async componentDidMount() {
    this.checkPermission();
  }

  render() {
    return (
      <Tab
        onNavigationStateChange={() => ({ /* don't show navigation change logs */ })}
      />
    );
  }
}

export default App;
