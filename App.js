import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './screens/Explore'
import Saved from './screens/Saved' 
import Inbox from './screens/Inbox'
import Profile from './screens/Profile'
import Trips from './screens/Trips'

export default createBottomTabNavigator({
  Explore:{
    screen:Explore,
    navigationOptions: {
      tabBarLabel : 'EXPLORE',
      tabBarIcon: ({tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24}/>
      )
    }
  },
  Saved:{
    screen:Saved,
    navigationOptions: {
      tabBarLabel : 'Saved',
      tabBarIcon: ({tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={24}/>
      )
    }
  },
  Trips:{
    screen:Trips,
    navigationOptions: {
      tabBarLabel : 'Trips',
      tabBarIcon: ({tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{height:24, width:24, tintColor:tintColor}} />
      )
    }
  },
  Inbox:{
    screen:Inbox,
    navigationOptions: {
      tabBarLabel : 'Inbox',
      tabBarIcon: ({tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24}/>
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions: {
      tabBarLabel : 'Profile',
      tabBarIcon: ({tintColor }) => (
        <Icon name="ios-contacts" color={tintColor} size={24}/>
      )
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity:0.5,
      elevation: 5
    }
  }
}
)
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
