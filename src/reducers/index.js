import { combineReducers } from 'redux-immutable';
import navReducer from "./navReducer";
import loginReducer from './loginReducer';
import chatReducer from './chatReducer';

export default combineReducers({
    nav:navReducer,
    loginStore: loginReducer,
    chatStore: chatReducer
});