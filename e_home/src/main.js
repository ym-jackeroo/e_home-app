// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $axios from './utils/index'
import Vuex from 'vuex'
import store from './store'
import Header from './components/Header'
import NoData from './components/NoData'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Vuex);

Vue.use(Mint);

// require styles
import 'swiper/dist/css/swiper.css'

Vue.prototype.$axios = $axios

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

Vue.component("Header", Header)
Vue.component("NoData", NoData)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
