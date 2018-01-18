import {LOGIN} from "../constants/ActionTypes";
import Immutable from 'immutable'

const login = (userName, password) => {
    return {
        type: LOGIN.DOING,
        payload: Immutable.fromJS({
            userName,
            password
        })
    }
};

export { login }