import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabComponent from '../../components/tab/TabComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

class NewsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabComponent text={'This is News screen!'} />
      </View>
    );
  }
}

NewsScreen.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: () => (
    // <Image source={require('../../assets/images/newspaper.png')} />
    <Icon name="newspaper-o" size={25} color="gray" />
  ),
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2124',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default NewsScreen;
