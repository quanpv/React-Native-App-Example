import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import List from "../List";
import {withNavigation, NavigationActions} from 'react-navigation';



 class ListContentDrawer extends Component {

  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this)
    this.navigateToScreen = this.navigateToScreen.bind(this)
    this.state = {isLoading: true,
      data: []}
  }

  componentWillMount() {
//     this.data = [
//       {
//         groupHeaderData: {title: 'Nhập đơn'},
//         groupListData: ['Xe cơ giới',
//         'Nhà tư nhân',
//         'Tín dụng cá nhân',
//         'Con người',
//         'Tai nạn hộ gia đình',
//         'Tai nạn sử dụng điện',
//         'Du lịch toàn cầu',
//         'Tai nạn mức cao',
//         'Health Care VIP',
//         'Health Care gia đình VIP',
//         'Trễ chuyến bay',
//         'An tâm vững bước'
// ]
//       },
//       {
//         groupHeaderData: {title: 'Báo cáo'},
//         groupListData: ['Bảng kê ngày', 'Báo cáo tháng']
//       },
//       {
//         groupHeaderData: {title: 'Biểu phí'},
//         groupListData: ['Xe cơ giới',
//         'Nhà tư nhân',
//         'Tai nạn hộ gia đình',
//         'Tai nạn sử dụng điện',
//         'Du lịch toàn cầu',
//         'Tai nạn mức cao',
//         'Health Care',
//         'Yêu là cưới'
// ]
//       },
//       {
//         groupHeaderData: {title: 'Hệ thống'},
//         groupListData: ['NSD đơn vị']
//       }
//     ]
  }

  componentDidMount() {
    return fetch('http://10.2.8.50:3000/listMenu')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('listMenu-done', responseJson[0].groupList[0].sub_title);
          this.setListMenu(responseJson)
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
  }

  navigateToScreen ( route, link, title ) {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    // this.props.navigation.dispatch(navigateAction, {
    //   link: link
    // });
    this.props.navigation.navigate(route, {
      link: link,
      title: title
    });
}

  setListMenu = (value) => {
    var list = value.map((item, key) => 
    {
      // console.log(item.title) 
      return {
        groupHeaderData: {title: item.title},
        groupListData: item.groupList.map(
          (itemSub, keySub) => {return itemSub.sub_title}
        )
      }
    }
    );
    this.setState({
      data: list
    });
    console.log(list) 
};

_onPressItem(item, groupId, rowId) {
  console.log('_onPressItem--------->',this.state.dataSource[groupId].groupList[rowId].link)
  var item = this.state.dataSource[groupId].groupList[rowId]
  this.props.navigation.closeDrawer()
  this.navigateToScreen('ItemScreen', item.link, item.sub_title);
// this.props.navigation.dispatch(navigateActionTabs);
    // else if(rowId == 1) this.navigateToScreen('NhaTN');
    // this.props.navigation.dispatch(navigateActionNTN);
    
}

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.pageContainer}>
        <List data={this.state.data}
        onPressItem={this._onPressItem}/>
      </View>
    )
  }
}

const navigateActionNTN = NavigationActions.navigate({
  routeName: 'NhaTN'
});

const navigateActionTabs = NavigationActions.navigate({
  routeName: 'MainTabs'
});

const styles = StyleSheet.create({
  pageContainer: {
    // marginTop: Constants.IS_IOS ? 20 : 0,
    // height: Constants.DEVICE_HEIGHT - (Constants.IS_IOS ? 20 : 0)
  }
});

export default withNavigation(ListContentDrawer);