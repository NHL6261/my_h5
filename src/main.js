import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import './style/scss/main.scss'
import HeaderCom from './components/modules/headerinfo'
Vue.config.productionTip = false
Vue.use(HeaderCom)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')