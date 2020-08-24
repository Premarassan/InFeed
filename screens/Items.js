import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Linking,
    Alert
  } from 'react-native';
import { WebView } from 'react-native-webview'
  import InAppBrowser from 'react-native-inappbrowser-reborn'
//import Lists2 from 'Items2';
import { Icon } from 'react-native-elements';

//let id = this.props.id;
//this.props.navigation.navigate('Explore', {id: id})
const WebViewGoogle = () => {
  return (
     <View style = {{height: 600}}>
        <WebView source = {{ uri: this.props.link }}/>
     </View>
  )
}

export default class Items extends Component {
    clickClick = () => {
        Linking.canOpenURL(WebViewGoogle).then(supported => {
          if (supported) {
            Linking.openURL(WebViewGoogle);
          } else {
            console.log("Error Error Error to Open:" + this.props.link);
          }
        });
      };
    
  render() {
    return(
      <TouchableOpacity onPress={this.clickClick}>
        <View style={styles.rowContainer}>
          <Image source={{uri: this.props.thumbnail}}
          style={styles.thumbnail}
          resizeMode="contain" />
          <View style={styles.rowText}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
              {this.props.title}
            </Text>
            <Text style={styles.brand} numberOfLines={1} ellipsizeMode ={'tail'}>
              {this.props.brand}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  brand: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });

{/*
clickClick = () => {
    Linking.canOpenURL(this.props.link).then(supported => {
      if (supported) {
        Linking.openURL(this.props.link);
      } else {
        console.log("Error Error Error to Open:" + this.props.link);
      }
    });
  };

  async openLink() {
        try {
            const isAvailable = await InAppBrowser.isAvailable()
            const url = (this.clickClick)
            if (isAvailable){
                InAppBrowser.open(url, {
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: 'gray',
                    preferredControlTintColor: 'white'
                }).then((result)=> {
                    Alert.alert(JSON.stringify(result))
                })
            } else Linking.openURL(url)
        } catch (error) {
            Alert.alert(error.message)
        }
    }

*/}