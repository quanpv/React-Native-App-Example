import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';

class OtherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {geolocation: null}
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigation.goBack();
  }

 getLocation() {
  Geolocation.getCurrentPosition(
    position => {

      console.log('geolocation: ', position);
      this.setState({
        geolocation: position,
      }, function(){

      });
    },
    error => alert(error.message),
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
  );
 }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Location App required Location permission',
          message:
          'We required Location permission in order to get device location ' +
          'Please grant us.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You are access for the location');
        this.getLocation()
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {
    (Platform.OS) === 'android' ? this.requestCameraPermission() : this.getLocation()
    
  }

  setTextLocation = (value) => {
    if(value != null) {
        return (
        JSON.stringify(value.coords)
        );
    } else {
        
    }
};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goBack}
            color={'#242134'}
            title="Go back!"
          />
          <Text style={styles.text}>{this.setTextLocation(this.state.geolocation)}</Text>
        </View>
      </View>
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

export default withNavigation(OtherComponent);
