import {StackNavigator, NavigationActions} from "react-navigation";
import LoginContainer from './containers/LoginContainer'
import tab from './tab'
import Detail from './containers/Detail'
import CustomTab from './CustomTab'
import {DeviceEventEmitter} from "react-native";
import React from 'react'

const AppNavigator = StackNavigator({
        Login: {
            screen: LoginContainer
        },
        Home: {
            screen: tab,
            path: 'app',
        },
        Detail: {
            screen: Detail
        }
    },
    {
        navigationOptions: {
            // header:null,
            headerBackTitle: null,
            headerTintColor: '',
            showIcon: true,
            tabBarVisible: false,
        },
        modal: 'card',
        headerMode: 'screen',
        initialRouteName: 'Login',//设置默认的页面组件，必须是上面已注册的页面组件。
        initialRouteParams: {}, //初始路由的参数。
    });

// const defaultGetStateForAction = AppNavigator.router.getStateForAction;
//
// AppNavigator.router.getStateForAction = (action, state) => {
//
//     if (state && action.type === NavigationActions.NAVIGATE) {
//         const jumpRouteName = action.routeName;
//         const routes = state.routes;
//         const activeRoute = routes[state.index];
//         if (activeRoute.routeName === 'Home') {
//             let res = false;
//             for (let i = 0; i < activeRoute.routes.length; i++) {
//                 if (activeRoute.routes[i].routeName === jumpRouteName) {
//                     res = true;
//                     break;
//                 }
//             }
//             if (!res) {
//                 DeviceEventEmitter.emit('leaveOrIntoHomePage', false);
//             }
//         }
//     }
//
//     if (state && action.type === NavigationActions.BACK) {
//         const routes = state.routes;
//         const perActiveRoute = routes[state.index - 1];
//         if (perActiveRoute.routeName === 'Home') {
//             DeviceEventEmitter.emit('leaveOrIntoHomePage', true);
//         }
//     }
//
//     return defaultGetStateForAction(action, state);
// };
export default AppNavigator;
