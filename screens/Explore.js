import React from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Platform, StatusBar, ScrollView, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'

const { height, width } = Dimensions.get('window')


export default class Explore extends React.Component {
  componentWillMount(){
    this.startHeaderHeight = 80
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render(){
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{ flex:1 }}>
          <View style={{ height: this.startHeaderHeight, backgroundColor:'white', borderBottomWidth:1 ,borderBottomColor:'#dddddd'}}>
            <View style={{ flexDirection: 'row', padding:10, backgroundColor: 'white', marginHorizontal:20, marginTop:25, 
              shadowOffset:{width:0, height:0}, shadowColor:'black', shadowOpacity:0.2, elevation:2, 
              marginTop: Platform.OS == 'android' ? 40 : null 
            }}>
              <Icon name='ios-search' size={20} style={{marginRight: 10, marginTop:5}}></Icon>
              <TextInput underlineColorAndroid="transparent" placeholder="Try search in Korea" placeholderTextColor="grey" style={{flex:1, fontWeight:'700', backgroundColor:'white'}}/>
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1, backgroundColor:'white',paddingTop:20 }}>
              <Text style={{fontSize:22, fontWeight:'700', paddingHorizontal: 20}}>
                What can we help you find, Seoul?
              </Text>

              <View style={{height:130, marginTop:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  <Category imageUri={require('../assets/seoul-1.jpeg')} name="Namsan Tower"/>
                  <Category imageUri={require('../assets/seoul-4.jpeg')} name="Lotte World"/>
                  <Category imageUri={require('../assets/seoul-2.jpeg')} name="Jongro"/>
                  <Category imageUri={require('../assets/seoul-3.jpeg')} name="Jamsil"/>
                </ScrollView>
              </View>

              <View style={{marginTop:40, paddingHorizontal:20}}>
                <Text style={{ fontSize:24, fontWeight:'700'}}>
                  Introducing My AirBnB UI
                </Text>
                <Text style={{fontWeight:'100', marginTop:10 }}>
                  This is made by HANE (HANEUL KIM) who used React Native 
                </Text>
              </View>
              
              <View style={{width: width-4, height:200, marginTop:20 }}>
                <Image style={{ flex:1, height:null, width:null, resizeMode:'cover', borderColor:'#dddddd', borderRadius:5, borderWidth:1}} 
                  source={require('../assets/seoul-5.jpeg')} 
                />
              </View>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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
