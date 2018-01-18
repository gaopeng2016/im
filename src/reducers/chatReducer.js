import Immutable from 'immutable';
import {CHAT} from "../constants/ActionTypes"

const initState = Immutable.fromJS({
    title:'微聊',
    unreadCount:0, // 未读消息数量
    data:[] ,// 好友列表和群列表 按照最后说话时间排序
    error:''
});

const chatReducer = (state = initState, action) => {
    switch (action.type) {
        case CHAT.DOING :
            return state.set("title", '读取中...').set('error','');
        case CHAT.DONE :
            return state.set("title", "微聊").set('unreadCount', action.payload.unreadCount).set('data', action.payload.data).set('error','');
        case CHAT.ERROR :
            return state.set("title", '微聊(未连接)').set('error', action.payload.get('error'));
        default:
            return state
    }
};

export default chatReducer;
