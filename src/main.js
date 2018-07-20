import Vue from 'vue'
import App from './app.vue'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(App),
    router
})
