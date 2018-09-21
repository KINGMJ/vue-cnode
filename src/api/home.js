import {get} from './index';

export default {
    //获取主题列表
    getTopics: (payload)=> {
        return get('/topics', payload)
    },
    //获取主题详情
    getTopicDetail: (payload)=> {
        return get('/topic/' + payload.id)
    }
}