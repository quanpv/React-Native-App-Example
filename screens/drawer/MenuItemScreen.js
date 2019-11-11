import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MenuItemComponent from '../../components/drawer/MenuItemComponent';

class MenuItemScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuItemComponent text={'Menu Nhập Đơn!'} />
      </View>
    );
  }
}

MenuItemScreen.navigationOptions = {
  // title: 'Screen 2',
  // headerRight: <BackToMenu />,
  // headerTintColor: '#3498db',
  // gesturesEnabled: true,

  // // only to Tab navigation example
  // tabBarLabel: 'Home2',
  // tabBarIcon: () => (
  //   <Image source={require('../../assets/images/homepage.png')} />
  // ),

  // only to Drawer navigation example
  drawerLabel: 'Nhập đơn',
  drawerIcon: () => (
    <Image source={require('../../assets/images/homepage.png')} />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default MenuItemScreen;
