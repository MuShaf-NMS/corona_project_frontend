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
  if (to.matched.some(record => record.meta.adminAuthenticated)) {
    if (store.getters.getUser != null && store.getters.getUser.status == 'admin') {
      next()
    } else {
      next('/login')
    }
  }
  else if (to.matched.some(record => record.meta.siswaAuthenticated)) {
    if (store.getters.getUser != null && store.getters.getUser.status == 'siswa') {
      next()
    } else {
      next('/login')
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
