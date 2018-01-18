import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from "../pages/LoginPage";
import { login } from "../actions/loginAction"
import {connect} from 'react-redux'
import { NavigationActions } from 'react-navigation'
import io from 'socket.io-client'

const socket = io('http://127.0.0.1:3001/test', {
    transports: ['websocket'],
    query:{token:"111"}
});

@connect(state => ({
    loginStore: state.get('loginStore'),
}))
class LoginContainer extends Component {

    static navigationOptions = {
      header: null
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.loginStore.get('statusText') === '登录成功'){
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home'}),
                ]
            });
            this.props.navigation.dispatch(resetAction)
            // this.props.navigation.navigate('Home')
        }
    }

    login = (userName, password) => {
        this.props.dispatch(login(userName, password))
    };

    render(){
        const loginStore = this.props.loginStore;
        console.log(loginStore, 'loginStore');
        return(
            <View style={styles.container}>
                <LoginPage login={this.login} />
                <Text>{loginStore.get('statusText')} </Text>
                <Text>{loginStore.get('error')} </Text>
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

export default LoginContainer;