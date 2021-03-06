import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Favourite extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Favourite 
                </Text>
            </View>
        );
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title : {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})