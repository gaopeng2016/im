import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import store from "./src/store";
import Router from './src/router'
import { addNavigationHelpers } from "react-navigation";

@connect(state => ({
    nav: state.get('nav')
}))
class AppWithNavigationState extends Component {




    render() {
        return (
            <Router
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

export default App
