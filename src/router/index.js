import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/login'
    },

    {
        path: '/login',
        name: 'About',
        component: () =>
            import ('@/views/authorization')
    },
    {
        path: '/agreement',
        name: 'Agreement',
        component: () =>
            import ('@/components/agreement')
    }
]

const router = new VueRouter({
    routes
})

export default router