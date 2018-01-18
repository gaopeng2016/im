import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class LoginPage extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return  nextProps.login !== this.props.login;
    }

    userName = null;
    password = null;

    login = () => {
        this.props.login(this.userName, this.password)
    };


    render() {
        console.log('loginPage rendered');
        return (
            <View style={styles.container}>
                <TextInput onChangeText={text => this.userName = text} placeholder={"用户名"}
                           style={{width: 100, height: 30}}/>
                <TextInput onChangeText={text => this.password = text} placeholder={"密码"} secureTextEntry={true}
                           style={{width: 100, height: 30}}/>
                <Button title="登录" onPress={this.login}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});