import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';

export default class MessageContainer extends Component {

    flag = false;

    componentDidMount(){
        AppState.addEventListener('change',this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState)=>{

        if (nextAppState!= null && nextAppState === 'active') {

            //如果是true ，表示从后台进入了前台 ，请求数据，刷新页面。或者做其他的逻辑
            if (this.flag) {
                //这里的逻辑表示 ，第一次进入前台的时候 ，不会进入这个判断语句中。
                // 因为初始化的时候是false ，当进入后台的时候 ，flag才是true ，
                // 当第二次进入前台的时候 ，这里就是true ，就走进来了。

                //测试通过
                alert("从后台进入前台");

                // 这个地方进行网络请求等其他逻辑。
            }
            this.flag = false ;
        }else if(nextAppState != null && nextAppState === 'background'){
            this.flag = true;
        }

    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>MessageContainer</Text>
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