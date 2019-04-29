import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShapcarContainer from './components/ShapcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'

//3.3创建路由对象
var routerObj = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shapcar', component: ShapcarContainer },
        { path: '/serach', component: SearchContainer },
    ],
    linkActiveClass: 'mui-active'
})
export default routerObj