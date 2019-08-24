import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Tag extends React.Component {
    render() {
        return (
            <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2,  marginRight:5, marginBottom:5, marginPadding:5 }}>
                <Text style={{ fontWeight: '700', fontSize: 10 }}>
                    Guests
                </Text>
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
