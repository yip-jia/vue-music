import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import './common/stylus/index.styl'
import fastclick from 'fastclick'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('./common/images/default.png')
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
