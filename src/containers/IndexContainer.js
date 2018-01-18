import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



export default class IndexContainer extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>首页</Text>
                <Button title="跳转到详情页面" onPress={() => this.props.navigation.navigate('Detail')}/>
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