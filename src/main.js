import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/index.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})