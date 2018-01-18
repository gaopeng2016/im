import React from 'react';
import {Image, StyleSheet, View, Button, Text} from 'react-native';
import {TabNavigator} from "react-navigation";
import IndexContainer from './containers/IndexContainer'
import IdeaContainer from "./containers/IdeaContainer";
import MessageContainer from "./containers/MessageContainer";

export const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle, big) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            focused
                ?
                <Image
                    source={normalImage}
                    style={[styles.icon, {tintColor: tintColor}, big && {width: 50, height: 50}]}
                />
                :
                <Image
                    source={selectedImage}
                    style={[styles.icon, {tintColor: tintColor}, big && {width: 50, height: 50}]}
                />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:12,color:'white'};
    // header的style
    const headerStyle = {backgroundColor:'#4ECBFC'};
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle};
};

/**
 * 底部导航栏设置
 */
const TabNav = TabNavigator({
    Index: {
        screen: IndexContainer,
        navigationOptions: TabOptions('首页', require('../resources/img/file.png'), require('../resources/img/file.png'), 'shouye')
    },
    Idea: {
        screen: IdeaContainer,
        navigationOptions: TabOptions('想法', require('../resources/img/yuan.png'), require('../resources/img/yuan.png'), 'xiaoxi')
    },
    Message: {
        screen: MessageContainer,
        navigationOptions: TabOptions('消息', require('../resources/img/mine.png'), require('../resources/img/mine.png'), 'wode')
    },

}, {
    navigationOptions:{
        tabBarVisible: true,
    },
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    lazy: true, // 是否懒加载
    tabBarOptions: {
        activeBackgroundColor:'white',
        activeTintColor:'#4ECBFC',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',

        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        // indicatorStyle: {height:0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: 'rgba(0,0,0,0)', // TabBar 背景色
            height:50,
            // shadowOffset: {width: 0, height: 0},
            // shadowColor: '#aaa',
            // shadowOpacity: 0.5,
            // shadowRadius: 5,
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            // marginTop:0
        },
        // iconStyle:{
        //     padding:0,
        //     borderWidth:1
        // }
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:25,
        height:25,
    }
});

export default TabNav