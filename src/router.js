import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/post',
            name: 'post',
            component: ()=>import('./views/Post.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: ()=>import( './views/Message.vue')
        },
        {
            path: '/me',
            name: 'me',
            component: ()=>import( './views/Me.vue')
        },
        {
            path: '/topic/:id',
            name: 'topic',
            component: ()=>import( './views/Topic.vue')
        }
    ]
})
