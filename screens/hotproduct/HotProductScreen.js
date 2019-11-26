import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HotProductComponent from '../../components/hotproduct/HotProductComponent';

class HotProductScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HotProductComponent />
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

export default HotProductScreen;
