import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        SAVA_TOKEN: (state, value) => {
            state.token = value
        }
    },
    actions: {},
    modules: {}
})