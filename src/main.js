//入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入app根组件
import app from './app.vue'

//导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
Vue.prototype.$http = axios

//按需导入mint-ui
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)

Vue.component(Swipe.name, Swipe) //轮播图
Vue.component(SwipeItem.name, SwipeItem)

//导入router.js路由模块
import routerObj from './router.js'

//创建vue实例
var vm = new Vue({
    el: "#app",
    data: {},
    render: c => c(app),
    router: routerObj
})