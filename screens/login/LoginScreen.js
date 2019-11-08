import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LoginComponent from '../../components/login/LoginComponent';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2124',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default LoginScreen;
