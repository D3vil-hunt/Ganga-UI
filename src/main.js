import '@fortawesome/fontawesome-free/css/all.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVueIcons from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVueIcons,
  render: h => h(App)
}).$mount('#app')
