import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class IdeaContainer extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>IdeaContainer</Text>
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