import React from 'react';
import { View, Text, Button, Image, StyleSheet,ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true}
    this.goToTab = this.goToTab.bind(this);
  }

  goToTab() {
    this.props.navigation.navigate('Tab1');
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
    );
  };

  actionOnRow(item, index) {
    console.log('Selected Item :',index);
    this.props.navigation.push('WebView', {
      link: item.url
    });
 }

_renderItem = (item, index) => {
  if(index > 0) {
      return (
        <TouchableOpacity style={styles.item}
        onPress={ () => this.actionOnRow(item, index)}>
        {/* <Text style={styles.textWhite}>{item.rank}</Text> */}
        <View style = {{ flexDirection: 'row', flexWrap: 'nowrap', marginTop: 10}}>
        <Image style={styles.image} source={{uri: item.source_info.img}}/>
        <View style = {{flex: 1, flexDirection: 'column', alignItems : 'flex-start',alignContent: 'flex-start'}}>
        <Text style={styles.textWhite}>{item.title}</Text>
        <Text style={styles.textTime}>{"1 day ago"}</Text>
        </View>
      
        </View>
        <View style = {{ flexDirection: 'row', flexWrap: 'nowrap',
         justifyContent: 'flex-start', position: 'absolute',
         bottom: 10, alignItems: 'center'}}>
        <Text style={styles.textStatistic}>{"bullish:"}</Text>
        <Icon name="arrow-up" size={15} color="gray" />
        <Text style={styles.textStatistic3}>{item.upvotes}</Text>
        <Text style={styles.textStatistic2}>{"bearish:"}</Text>
        <Icon name="arrow-down" size={15} color="gray" />
        <Text style={styles.textStatistic3}>{item.downvotes}</Text>
        </View>
        
        </TouchableOpacity>
      );
  } else {
      return (
        <TouchableOpacity style={styles.item}
        onPress={ () => this.actionOnRow(item, index)}>
        {/* <Text style={styles.textWhite}>{item.rank}</Text> */}
        <View style = {{ flexDirection: 'row', flexWrap: 'nowrap', marginTop: 10}}>
        <Image style={{width: 100,height: 100,
  }} source={{uri: item.source_info.img}}/>
        <View style = {{flex: 1, flexDirection: 'column', alignItems : 'flex-start',alignContent: 'flex-start'}}>
        <Text style={styles.textWhite}>{item.title}</Text>
        <Text style={styles.textTime}>{"1 day ago"}</Text>
        </View>
      
        </View>
        <View style = {{ flexDirection: 'row', flexWrap: 'nowrap',
         justifyContent: 'flex-start', position: 'absolute',
         bottom: 10, alignItems: 'center'}}>
        <Text style={styles.textStatistic}>{"bullish:"}</Text>
        <Icon name="arrow-up" size={15} color="gray" />
        <Text style={styles.textStatistic3}>{item.upvotes}</Text>
        <Text style={styles.textStatistic2}>{"bearish:"}</Text>
        <Icon name="arrow-down" size={15} color="gray" />
        <Text style={styles.textStatistic3}>{item.downvotes}</Text>
        </View>
        
        </TouchableOpacity>
      );
  }
};

  componentDidMount() {
    return fetch('https://min-api.cryptocompare.com/data/news/')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('getNews-Done:', responseJson);
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

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.text}>
    //       {this.props.text}
    //     </Text>
    //   </View>
    // );

    return(
      <View style={{flex: 1, paddingTop:20, paddingLeft:10}}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item, index}) => (
            this._renderItem(item, index)
            // <TouchableOpacity style={styles.item}
            // onPress={ () => this.actionOnRow(item, index)}>
            // {/* <Text style={styles.textWhite}>{item.rank}</Text> */}
            // <View style = {{ flexDirection: 'row', flexWrap: 'nowrap', marginTop: 10}}>
            // <Image style={styles.image} source={{uri: item.source_info.img}}/>
            // <View style = {{flex: 1, flexDirection: 'column', alignItems : 'flex-start',alignContent: 'flex-start'}}>
            // <Text style={styles.textWhite}>{item.title}</Text>
            // <Text style={styles.textTime}>{"1 day ago"}</Text>
            // </View>
          
            // </View>
            // <View style = {{ flexDirection: 'row', flexWrap: 'nowrap',
            //  justifyContent: 'flex-start', position: 'absolute',
            //  bottom: 10, alignItems: 'center'}}>
            // <Text style={styles.textStatistic}>{"bullish:"}</Text>
            // <Icon name="arrow-up" size={15} color="gray" />
            // <Text style={styles.textStatistic3}>{item.upvotes}</Text>
            // <Text style={styles.textStatistic2}>{"bearish:"}</Text>
            // <Icon name="arrow-down" size={15} color="gray" />
            // <Text style={styles.textStatistic3}>{item.downvotes}</Text>
            // </View>
            
            // </TouchableOpacity>

          )}
          keyExtractor={({id}, index) => id}
        />
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
    width: 70,
    height: 70,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 20,
  },

  buttonContainer: {
    padding: 15,
  },

  item: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    // alignItems: 'center',
    alignContent: 'center',
    height: 140,
    flexWrap: 'wrap'
  },
  textWhite: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 17,
    marginLeft: 10,
    marginRight: 5
   
  },
  textTime: {
    color: 'gray',
    textAlign: 'justify',
    fontSize: 15,
    marginLeft: 10,
   
  },
  textStatistic: {
    color: 'gray',
    textAlign: 'justify',
    fontSize: 15,
    marginLeft: 0,
    
  },
  textStatistic2: {
    color: 'gray',
    textAlign: 'justify',
    fontSize: 15,
    marginLeft: 30,
    
  },
  textStatistic3: {
    color: 'gray',
    textAlign: 'justify',
    fontSize: 15,
    marginLeft: 10,
    
  }
});

export default withNavigation(TabComponent);
