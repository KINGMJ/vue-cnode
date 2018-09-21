import Types from '../types';
import Api from '../../api/index';

const home = {
    state: {
        topicsList: []  //主题列表
    },
    mutations: {
        [Types.GET_TOPICS](state, payload) {
            state.topicsList = payload;
        }
    },
    actions: {
        /**
         * 获取主题，异步操作
         * @param commit
         * @param payload 传入的对象，{page:page,tab:tab,limit:limit}
         */
        getTopics({commit}, payload) {
            Api.Home.getTopics(payload)
                .then(res=> {
                    commit(Types.GET_TOPICS, res.data);
                });
        }
    }
};

export default home;