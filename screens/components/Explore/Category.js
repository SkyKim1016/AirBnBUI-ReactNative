import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Category extends React.Component {
  render(){
    return (
        <View style={{flex:1, width:130 , height:130, borderWidth:0.5, marginLeft:20, borderColor:'#dddddd', borderRadius:15, overflow: 'hidden', }}>
            <View style={{flex:2}}>
              <Image source={this.props.imageUri} style={{ flex:1 , width:null, height:null, resizeMode:'cover', borderRadius:5}}></Image>
            </View>
            <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
             <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.name}</Text>
            </View>
      </View>
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
