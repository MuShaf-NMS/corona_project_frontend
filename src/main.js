import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticated)) {
    if (store.getters.getUser == null) {
      next('/login')
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.getUser == null) {
      next()
    } else {
      next('/')
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
