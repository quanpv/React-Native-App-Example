import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ExpandableList from './ExpandableList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationActions} from 'react-navigation';
import { withNavigation } from 'react-navigation';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToScreen = this.navigateToScreen.bind(this);
    this._renderGroupListItem = this._renderGroupListItem.bind(this)
    
  }

  navigateToScreen(){
    console.log('=====>navigateToScreen')
    // const navigateAction = NavigationActions.navigate({
    //     routeName: 'NhaTN'
    // });
    // this.props.navigation.dispatch(navigateAction);
}
// navigateToScreen = (route) => () => {
//   console.log('=====>navigateToScreen123')
//   // const navigateAction = NavigationActions.navigate({
//   //   routeName: route
//   // });
//   // this.props.navigation.dispatch(navigateAction);
// }
  _renderGroupHeader({item, groupId, status, toggleStatus}) {
    return (
      <View style={[styles.headContainer, status && styles.headChosenContainer]}>
        <Text style={[styles.headTitleText, status && styles.headChosenTitleText]}>{item.title}</Text>
        <TouchableOpacity onPress={() => toggleStatus(true)}>
          <View style={styles.touchArea}>
          <Icon name="arrow-drop-down" size={20} color="gray" />
          {/* <Text style={{color: status ? '#2c8ed2' : '#333'}}>{status ? 'close' : 'open'}</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _renderGroupListItem({item, groupId, rowId, navigation}) {
    // const {renderGroupListItem} = this.props;
    return (
      <TouchableOpacity onPress={() => { 
    //     const navigateAction = NavigationActions.navigate({
    //     routeName: 'NhaTN'
    // });
    // if(rowId == 0) navigation.dispatch(navigateActionTabs);
    // else if(rowId ==1) navigation.dispatch(navigateActionNTN);
    // this.navigateToScreen('NhaTN')
    console.log('TouchableOpacity======>',rowId)
    this.props.onPressItem(item, groupId, rowId)
 
    }}>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemText}>{item}</Text>
      </View>
      </TouchableOpacity>
      
    );
  }

  render() {

    const {data = []} = this.props;

    return (
      <View style={styles.container}>
        <ExpandableList
          data={data}
          groupStyle={styles.groupItem}
          initialOpenGroups={[0]}
          renderGroupHeader={this._renderGroupHeader}
          renderGroupListItem={this._renderGroupListItem}
          />
      </View>
    );
  }
}

const navigateActionNTN = NavigationActions.navigate({
  routeName: 'NhaTN'
});

const navigateActionTabs = NavigationActions.navigate({
  routeName: 'MainTabs'
});

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#DDD',
    borderTopWidth: 1
  },
  groupItem: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1
  },
  headContainer: {
    paddingHorizontal: 15,
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headChosenContainer: {
    backgroundColor: '#e0ffff'
  },
  headTitleText: {
    flex: 1,
    color: '#333',
    fontWeight: 'bold'
  },
  headChosenTitleText: {
    color: '#2c8ed2'
  },
  touchArea: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemContainer: {
    height: 40,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    borderTopColor: '#DDD',
    borderTopWidth: 1
  },
  listItemText: {
    color: '#333'
  }
});

// export default List;
export default withNavigation(List);