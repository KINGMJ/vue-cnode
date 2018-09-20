import Types from '../types';
import Api from '../../api/index';

const home = {
    state: {
        topicsList: []  //主题列表
    },
    mutations: {
        [Types.GET_TOPICS](state, payload) {
            state.topicsList = state.topicsList.concat(payload);
        }
    },
    actions: {
        //获取主题，异步操作
        getTopics({commit}, payload) {
            Api.Home.getTopics()
                .then(res => {
                    commit(Types.GET_TOPICS, res.data);
                });
        }
    }
};

export default home;