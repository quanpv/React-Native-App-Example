import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {List} from "../List";

 class ListContentDrawer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.data = [
      {
        groupHeaderData: {title: 'Nhập đơn'},
        groupListData: ['Xe cơ giới',
        'Nhà tư nhân',
        'Tín dụng cá nhân',
        'Con người',
        'Tai nạn hộ gia đình',
        'Tai nạn sử dụng điện',
        'Du lịch toàn cầu',
        'Tai nạn mức cao',
        'Health Care VIP',
        'Health Care gia đình VIP',
        'Trễ chuyến bay',
        'An tâm vững bước'
]
      },
      {
        groupHeaderData: {title: 'Báo cáo'},
        groupListData: ['Bảng kê ngày', 'Báo cáo tháng']
      },
      {
        groupHeaderData: {title: 'Biểu phí'},
        groupListData: ['Xe cơ giới',
        'Nhà tư nhân',
        'Tai nạn hộ gia đình',
        'Tai nạn sử dụng điện',
        'Du lịch toàn cầu',
        'Tai nạn mức cao',
        'Health Care',
        'Yêu là cưới'
]
      },
      {
        groupHeaderData: {title: 'Hệ thống'},
        groupListData: ['NSD đơn vị']
      }
    ]
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <List data={this.data}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    // marginTop: Constants.IS_IOS ? 20 : 0,
    // height: Constants.DEVICE_HEIGHT - (Constants.IS_IOS ? 20 : 0)
  }
});

export default ListContentDrawer;