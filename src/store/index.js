import Vue from 'vue'
import Vuex from 'vuex'

//导入actions、mutations及各个模块的store
import actions from './actions';
import mutations from './mutations';
import home from './module/home';
import post from './module/post';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: mutations,
    actions: actions,
    modules: {
        home, post
    }
})
