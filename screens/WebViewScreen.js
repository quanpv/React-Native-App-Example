import React from 'react';
import { View, Image, StyleSheet,SafeAreaView } from 'react-native';
import WebViewComponent from '../components/WebViewComponent';

class WebViewScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <WebViewComponent link= {navigation.getParam('link', 'https://bancastest.mic.vn:8082/')}/>
        {/* <WebViewComponent link= {'https://bancas.mic.vn/bhhd_thongke.aspx'}/>  */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default WebViewScreen;
