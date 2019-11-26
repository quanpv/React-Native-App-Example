import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View, Image, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textTK: '', textMK: ''};
    this.goToMain = this.goToMain.bind(this);
  }

  goToMain() {
    // Go Main
    const { navigate } = this.props.navigation;
   
    let tk = this.state.textTK
    let mk = this.state.textMK
    if(tk == "quanpv" && mk == "112233") {
      navigate('Main')
    } else {
      console.log('========>TK:', this.state.textTK)
      console.log('========>MK:', this.state.textMK)
      alert('Tài khoản hoặc mật khẩu sai, vui lòng thử lại!')
    }
    
  }

  render() {
    return (
      // <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} 
        // source={{uri: "https://bancas.mic.vn/images/background.jpeg"}}
        source={require('../../assets/images/backround_login.jpg')}
        >
          <Image style={styles.image} source={{uri: "https://bancas.mic.vn/images/logo.png"}}/>
          <View style={styles.container}>
          <TextInput style={styles.textInput1}
           placeholder="Tài khoản"
           placeholderTextColor="#7a819b"
           onChangeText={(text) => this.setState({textTK:text})}
           value={this.state.textTK}/>
          <TextInput style={styles.textInput2}
          secureTextEntry={true}
          placeholder="Mật khẩu"
          placeholderTextColor="#7a819b"
          onChangeText={(text) => this.setState({textMK:text})}
          value={this.state.textMK}/>
          <TouchableHighlight style={{width: "90%",borderRadius: 7,
    marginTop: 20,backgroundColor: '#10833e',} }
          onPress={this.goToMain} >
        <Text style={styles.login}>
          Đăng Nhập
        </Text>
      </TouchableHighlight>
          </View>

        </ImageBackground>
     
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 250,
    width: '90%',
    backgroundColor: '#212b46',
    borderRadius: 10
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch', // or 'stretch'
    width: '100%', 
    height: '100%',
  },
  image: {
    width: 120,
    height: 80,
    marginBottom: 30,
  },
  login: {
  
    width: "100%",
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    position: 'relative',
   
  },
  textInput1: { 
    width: "90%",
    height: 50, 
    marginTop: 40,
    color: "white",
    borderColor: '#151932',
    backgroundColor: '#1b2139', 
    borderWidth: 1,
    borderRadius: 7, 
  },
  textInput2: { 
    width: "90%",
    height: 50, 
    marginTop: 20,
    color: "white",
    borderColor: '#151932', 
    backgroundColor: '#1b2139', 
    borderWidth: 1,
    borderRadius: 7, 
  },
});

export default withNavigation(LoginComponent);
