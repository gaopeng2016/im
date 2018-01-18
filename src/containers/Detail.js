import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Detail extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Detail</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});