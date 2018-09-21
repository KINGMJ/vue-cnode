import Types from '../types';
import Api from '../../api/index';

const home = {
    state: {
        topicsList: [],   //主题列表
        topicDetail: {}   //主题详情
    },
    mutations: {
        [Types.GET_TOPICS](state, payload) {
            state.topicsList = payload;
        },
        [Types.GET_TOPIC_DETAIL](state, payload) {
            state.topicDetail = payload
        }
    },
    actions: {
        /**
         * 获取主题列表
         * @param commit
         * @param payload 传入对象 {page:page,tab:tab,limit:limit}
         */
        getTopics({commit}, payload) {
            Api.Home.getTopics(payload)
                .then(res=> {
                    commit(Types.GET_TOPICS, res.data);
                });
        },

        /**
         * 获取主题详情
         * @param commit
         * @param payload 传入对象 {id:id}
         */
        getTopicDetail({commit}, payload) {
            Api.Home.getTopicDetail(payload)
                .then(res=> {
                    commit(Types.GET_TOPIC_DETAIL, res.data);
                })
        }
    }
};

export default home;