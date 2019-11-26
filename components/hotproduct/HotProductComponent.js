import React from 'react';
import { FlatList, ActivityIndicator, View, Text, Button, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Card from '../../custom/Card'

class HotProductComponent extends React.Component {

    constructor(props) {
      super(props);
      this.goToMain = this.goToMain.bind(this)
    }

    goToMain() {
        // Go Main
        const { navigate } = this.props.navigation;
        navigate('Main')
    }

    render() {
        return (
          <View style={styles.container}>
              <Text style={{fontSize:20, marginBottom:20, color:'blue'}}>Sản Phẩm Nổi Bật</Text>
            <Card style={{padding: 10, margin: 10}}>
              <Text style={{textAlign: 'center'}}>Bảo Hiểm Hot!!!</Text>
              <Text style={{textAlign: 'center', marginTop: 10}}>Bảo Hiểm Nhà Tư Nhân</Text>
              <Text style={{textAlign: 'center', marginTop: 10}}>Bảo vệ an toàn nhà của bạn ^_^</Text>
              <TouchableOpacity onPress={()=>{
                  this.goToMain()
              }}>
                  <Text style={{fontSize:20, marginTop: 10, marginBottom:10, textAlign: 'center', color:'green'}}>Mua Ngay</Text>
              </TouchableOpacity>
            </Card>
            <Card style={{padding: 10, margin: 10}}>
              <Button
                onPress={()=>{
                    this.goToMain()
                }}
                title="Bảo Hiểm Hot"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </Card>
            <Card style={{padding: 10, margin: 10}}>
            <TouchableOpacity onPress={()=>{
                this.goToMain()
            }}>
                  <Text style={{fontSize:20, marginTop: 10, marginBottom:10, textAlign: 'center', color:'red'}}>
                      Vào Ngay Để Trải Ngiệm</Text>
              </TouchableOpacity>
            </Card>
          </View>
        );
      }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default withNavigation(HotProductComponent);