import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { WebView } from 'react-native-webview';

class WebViewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    console.log('WebViewComponent',this.props.link)
    return (
       <WebView 
      //  source={{ uri: 'https://www.google.com/' }}
      //  style = {styles.container}
       source={{uri: this.props.link}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
       startInLoadingState={true} />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonContainer: {
    padding: 15,
  },
});

export default withNavigation(WebViewComponent);
