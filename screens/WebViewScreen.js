import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import WebViewComponent from '../components/WebViewComponent';

class WebViewScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <WebViewComponent link= {navigation.getParam('link', '')}/>
        {/* <WebViewComponent link= {'https://bancas.mic.vn/bhhd_thongke.aspx'}/>  */}
      </View>
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
