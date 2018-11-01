import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false,
        userData: {},
        password: ''
    },
    mutations: {
        showLoading(state) {
            state.loading = true
        },
        hideLoading(state) {
            state.loading = false
        },
        storageUserData(state, payload) {
            state.userData = payload
        },
        storagePassword(state, payload) {
            state.password = payload
        }
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => sessionStorage.getItem(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                sessionStorage.setItem(key, value),
                removeItem: key => sessionStorage.removeItem(key),
            },
        }),
    ],
})

export default store;