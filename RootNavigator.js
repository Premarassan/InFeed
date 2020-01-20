import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; 
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';
//import {Icon} from 'react-native-elements';
import { createDrawerNavigator} from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/Ionicons'; 

import Home from './screens/Home'
import Alignment from './screens/Alignment'
import Bookmark from './screens/Bookmark'
import Favourite from './screens/Favourite'
import Lists from './screens/Lists'
import Items from './screens/Items'
import About from './screens/About'
import Disclaimer from './screens/Disclaimer'
//import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';

Icon.loadFont()

const HomeTabs = createStackNavigator(
    {
        Home: {screen: Lists},
        Lists: {screen: Lists},
        Items: {screen: Items}
    },
    
)

const BottomNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeTabs,
            navigationOptions:{
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor}) => (
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
                )
            }
        },
        Alignment: {
            screen: Alignment,
            navigationOptions:{
                tabBarLabel: 'Alignment',
                tabBarIcon: ({ tintColor}) => (
                    
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-apps'} />
                    
                )
            }
        },
        Bookmark: {
            screen: Bookmark,
            navigationOptions:{
                tabBarLabel: 'Bookmark',
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-bookmark'} />
                    </View>
                )
            }
        },
        Favourite: {
            screen: Favourite,
            navigationOptions:{
                tabBarLabel: 'Favourite',
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-heart-empty'} />
                    </View>
                )
            }
        },
    },
    {  
        initialRouteName: 'Home',
        activeColor: '#f0edf6',  
        inactiveColor: '#226557',  
        barStyle: { backgroundColor: '#4287f5' },  
    },
)

const DrawerNavigator = createDrawerNavigator(
    {
        Home:{screen: BottomNavigator},
        About:{screen: About},
        Disclaimer:{screen: Disclaimer}
    },
    
)

const RootNavigator = createStackNavigator(
    {
        InFeed:{screen: DrawerNavigator}
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return{
                headerLeft: (
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="ios-menu"  
                        size={30}  
                    />  
                )
            }
        }
    }
)

export default createAppContainer(RootNavigator)    

{/*
{
    contentComponent: ({ navigation }) => {
      _nav = navigation;
      return <DrawerMenuItem navigation={navigation} />
    },
    drawerWidth: width - 100,
    drawerType: 'slide',
  }
*/}