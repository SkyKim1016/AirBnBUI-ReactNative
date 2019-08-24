import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Map from "./components/Explore/Map/Map"

export default class Trips extends React.Component {
  render(){
    return (
     <Map/> 
    ); 
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
