import Vue from 'vue'
import App from './App.vue'

const evt = new Vue()
Vue.prototype.$evt = evt

new Vue({
  el: '#app',
  render: h => h(App)
})
