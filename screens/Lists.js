import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import Items from './Items';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: 'NEWS BTC',
          brand: 'InFeed App',
          link: 'https://www.newsbtc.com/',
          thumbnail: 'https://yt3.ggpht.com/a/AGF-l78bAEBP4m0HOvyYkxf9E3bUIukp8M2783pJdA=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
          id: 2,
          title: 'IOT Tech News',
          brand: 'InFeed App',
          link: 'https://www.iottechnews.com/',
          thumbnail: 'https://image.shutterstock.com/image-vector/internet-things-glyph-icon-silhouette-260nw-1172566369.jpg'
        },
        {
          id: 3,
          title: 'Big Data Tech News',
          brand: 'InFeed App',
          link: 'https://bigdataanalyticsnews.com/',
          thumbnail: 'https://bigdataanalyticsnews.com/wp-content/uploads/tn_bluetune_header_logo.jpg'
        },
        {
            id: 4,
            title: 'Predictive Analytics World',
            brand: 'InFeed App',
            link: 'https://www.predictiveanalyticsworld.com/machinelearningtimes/',
            thumbnail: 'https://www.predictiveanalyticsworld.com/machinelearningtimes/wp-content/uploads/2013/01/mltimes_logo_2020-1-1024x277.jpg'
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <Items
      id={item.id}
      title={item.title}
      brand={item.brand}
      link={item.link}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.products}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});


{/*
renderWebView() {

    if(this.state.check){
      return(
        <WebView
           source={this.props.link}
           style={{marginTop: 20}}
        />
      );
    }else {
       return(
         <TouchableOpacity 
           onPress={()=>this.setState({check: true})}>
            <Text>Open WebView</Text>
         </TouchableOpacity>
      );
    }
  }
*/}