import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StartRating from 'react-native-star-rating'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', borderRadius:15, overflow: 'hidden', marginBottom:15, }}>
                <View style={{ flex: 1 }}>
                    <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source={this.props.imageUri} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}> {this.props.type} </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}> {this.props.name} </Text>
                    <Text style={{ fontSize: 10 }}> ${this.props.price} </Text>
                    <StartRating disable={true} maxStars={5} rating={this.props.rating} starSize={10}/>
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