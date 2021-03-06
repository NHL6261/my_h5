import Vue from 'vue'
import Router from 'vue-router'
import tab_bar_route from '@/router/tab_bar_menu/tab_bar_menu'
import public_route from '@/router/pubic_route/pubic_route'
Vue.use(Router)
    //解决路由跳转的时候两次push的path地址相同
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [

    ...tab_bar_route, //app-底部菜单栏按钮
    ...public_route, //app-公共路由
    // ...common_route, //app-普通路由
]

const router = new Router({
    routes
})

export default router
// const routes = [
//     ...tab_bar_route, //app-底部菜单栏按钮
//     ...public_route, //app-公共路由
//     ...common_route, //app-普通路由
// ]