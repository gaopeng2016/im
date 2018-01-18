import React, { Component } from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity, DeviceEventEmitter} from 'react-native';

export default class CustomTabBar extends Component {

    h =  new  Animated.Value(0);

    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('leaveOrIntoHomePage',(disabled) =>{
            this.animated(disabled);
        })
    }

    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }

    animated = (disabled = true) => {
        if(disabled){
            Animated.timing(this.h, {
                toValue:0
            }).start();
            return
        }
        Animated.timing(this.h, {
            toValue:-50,

        }).start()
    };

    render(){
        const {navigation} = this.props;
        const {routes} = navigation.state;
        let selectedIndex = navigation.state.index;
        let isSelected = false;
        return (

            <Animated.View style={[styles.tabContainer, {bottom: this.h}]}>
                {
                    routes.map((route,index) =>{

                        //如果当前选中该index的router
                        selectedIndex === index?isSelected = true:isSelected = false;

                        //显示不同外观
                        let textColor = isSelected?'blue':'gray';

                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(route.routeName);
                                }}
                                key={route.routeName}
                                style={styles.tab}
                                activeOpacity={1}
                            >
                                <View>
                                    <Text style={{color:textColor,fontSize:12}}>{route.routeName}</Text>
                                </View>

                            </TouchableOpacity>
                        )
                    })}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 48,
        borderTopWidth:1,
        borderColor:'lightgray',
        position:'absolute',
        left:0,
        right:0,
        zIndex:1000
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    }
});