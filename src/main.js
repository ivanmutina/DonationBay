import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Croppa from "vue-croppa"
import 'vue-croppa/dist/vue-croppa.css'
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false
Vue.use(Croppa)
Vue.use(VueSimpleAlert);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

