import Immutable from 'immutable';
import {LOGIN} from "../constants/ActionTypes"

const initState = Immutable.fromJS({
    loading:false,
    statusText: '',
    error:''
});

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN.DOING :
            return state.set("loading", true).set('statusText', '登录中').set('error','');
        case LOGIN.DONE :
            return state.set("loading", false).set('statusText', '登录成功').set('error','');
        case LOGIN.ERROR :
            return state.set("loading", false).set('statusText', '登录失败').set('error', action.payload.get('error'));
        default:
            return state
    }
};

export default loginReducer;
